#!/usr/bin/env python3
"""Verify the deployed Learnora sitemap and robots.txt using only Python stdlib."""
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlparse

BASE_URL = "https://learnora-ab2.pages.dev"
SITEMAP_URL = BASE_URL + "/sitemap.xml"
ROBOTS_URL = BASE_URL + "/robots.txt"
NAMESPACE = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
EXPECTED_HOST = "learnora-ab2.pages.dev"


def fetch(url):
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Learnora-Production-Sitemap-Audit/1.0"},
    )
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.status, response.headers.get("Content-Type", ""), response.read()


# Cloudflare Pages deployment can trail the GitHub push; retry briefly.
last_error = None
for attempt in range(1, 13):
    try:
        status, content_type, body = fetch(SITEMAP_URL)
        if status == 200:
            break
        last_error = f"HTTP {status}"
    except Exception as error:
        last_error = str(error)
    print(f"Production sitemap not ready (attempt {attempt}/12): {last_error}")
    time.sleep(10)
else:
    raise SystemExit(f"FAIL: production sitemap did not return HTTP 200: {last_error}")

mime = content_type.split(";", 1)[0].strip().lower()
if mime not in {"application/xml", "text/xml"}:
    raise SystemExit(f"FAIL: unexpected sitemap Content-Type: {content_type!r}")

try:
    root = ET.fromstring(body)
except ET.ParseError as error:
    raise SystemExit(f"FAIL: production sitemap is not well-formed XML: {error}")

if root.tag != NAMESPACE + "urlset":
    raise SystemExit(f"FAIL: unexpected sitemap root element: {root.tag!r}")

live_urls = []
for node in root.findall(NAMESPACE + "url"):
    loc = node.findtext(NAMESPACE + "loc")
    if not loc or not loc.strip():
        raise SystemExit("FAIL: sitemap contains a url without a non-empty loc.")
    url = loc.strip()
    parsed = urlparse(url)
    if parsed.scheme != "https" or parsed.netloc != EXPECTED_HOST:
        raise SystemExit(f"FAIL: non-canonical sitemap URL: {url}")
    live_urls.append(url)

if not live_urls:
    raise SystemExit("FAIL: production sitemap contains zero URLs.")
if len(live_urls) != len(set(live_urls)):
    raise SystemExit("FAIL: production sitemap contains duplicate URLs.")

local_root = ET.parse(Path("sitemap.xml")).getroot()
local_urls = [
    (node.findtext(NAMESPACE + "loc") or "").strip()
    for node in local_root.findall(NAMESPACE + "url")
]
if set(live_urls) != set(local_urls):
    missing = sorted(set(local_urls) - set(live_urls))
    extra = sorted(set(live_urls) - set(local_urls))
    raise SystemExit(
        "FAIL: live sitemap differs from repository sitemap. "
        f"Missing live URLs: {missing[:5]}; unexpected live URLs: {extra[:5]}"
    )

robots_status, _, robots_body = fetch(ROBOTS_URL)
if robots_status != 200:
    raise SystemExit(f"FAIL: robots.txt returned HTTP {robots_status}.")
robots = robots_body.decode("utf-8-sig", errors="replace")
if SITEMAP_URL not in robots:
    raise SystemExit("FAIL: production robots.txt does not reference the production sitemap.")
if "Disallow: /" in robots:
    raise SystemExit("FAIL: production robots.txt blocks all crawlers.")

print(f"PASS: production sitemap HTTP {status}, Content-Type {content_type}, valid XML, {len(live_urls)} unique canonical URLs matching the repository sitemap.")
print("PASS: production robots.txt is accessible and references the production sitemap.")

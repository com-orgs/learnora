# Learnora — Learning Platform, Brand & Content Redesign Blueprint

Status: Strategy draft for review; not approved for production
Prepared: 6 November 2026
Production: https://learnora-ab2.pages.dev/
Working branch: strategy/learning-platform-redesign

## 1. Product ambition

Evolve Learnora from a collection of lesson pages into a coherent, free, international-first learning platform for independent learners. The benchmark is the depth and learning flow demonstrated by established platforms, not their wording, assets, code, or proprietary question banks.

The platform should help a learner answer four questions at every stage:
1. What am I going to learn?
2. Can I understand it with clear teaching and examples?
3. Can I practise until I can do it independently?
4. How do I know what I have mastered and what to study next?

Do not claim that Learnora is equivalent to or endorsed by another platform. Do not promise search rankings, traffic, or AdSense approval.

## 2. Reference-platform research

### Khan Academy
Reference: https://www.khanacademy.org/
Fractions unit: https://www.khanacademy.org/math/arithmetic/fraction-arithmetic
Computing: https://www.khanacademy.org/computing

Observed patterns:
- A unit is a sequence of distinct skills, not one oversized article.
- Skills can contain several learn resources and separate practice exercises.
- Practice sets state a mastery threshold (for example, a required number correct).
- Several quizzes can be placed after groups of related skills, followed by a unit test.
- Progress states distinguish not started, attempted, familiar, proficient and mastered.
- Computing pathways are project/context-oriented and broken into coherent units.

Learnora adaptation:
- Create skill-level learning objectives and prerequisites.
- Provide multiple original teaching resources per skill where appropriate.
- Add short practice sets, skill checks, unit quizzes and cumulative tests.
- Track progress locally first; do not imply cross-device account sync until an account system exists.

### BBC Bitesize
Reference: https://www.bbc.co.uk/bitesize
Fractions topic: https://www.bbc.co.uk/bitesize/topics/zhdwxnb

Observed patterns:
- Clear age/level entry points (Primary, Secondary and Careers).
- Topic discovery is supported by strong visual cards and editorial illustrations.
- Lessons, videos, quizzes, activities and games are presented as different learning formats.
- Content is organized around the learner's level and subject.

Learnora adaptation:
- Use a clear grade/age/level selector and subject hubs.
- Give each subject a distinct but related visual language.
- Use original diagrams, visual explainers and activity cards, not emoji-only icons.
- Label learning formats and difficulty clearly.

### CK-12
Reference: https://www.ck12.org/

Observed patterns:
- A student-facing entry point and distinct textbook/FlexBook route.
- Interactive learning and tutor-style support are prominent.
- Subject resources are not all forced into one article format.

Learnora adaptation:
- Separate structured courses, reference notes, practice and interactive activities.
- Add interactive models only when they teach something meaningful and remain usable on mobile.

### OpenStax
Reference: https://openstax.org/

Observed patterns:
- Strong textbook-style depth and academic sourcing.
- Useful as a reference for rigorous explanations, terminology and source quality.

Learnora adaptation:
- Use credible open textbooks and primary educational sources to fact-check.
- Write explanations, examples and exercises independently; never copy textbook passages.

## 3. Brand and visual identity direction

Current homepage uses a navy/teal palette, emoji subject icons and generic educational copy. These are serviceable placeholders but do not yet create a distinctive education brand.

### Brand goals
- Recognizable at favicon size and on mobile.
- Friendly and optimistic without looking childish.
- Academic credibility without looking like a school administration portal.
- Consistent across homepage, subject hubs, lessons, quizzes, worksheets and social previews.

### Logo system to design
1. Primary wordmark: Learnora name with a custom, memorable symbol.
2. Compact symbol: recognizable without the wordmark; usable as favicon and app icon.
3. Monochrome version: works on print and low-colour contexts.
4. Light/dark variants with tested contrast.
5. SVG master asset plus PNG fallbacks and favicon sizes.

Creative direction to explore (not final selections):
- A distinctive open-book / pathway / spark concept, abstracted into a simple geometric mark.
- A custom letterform based on the L, with a subtle learning-path motif.
- Avoid generic graduation caps, stock lightbulbs, generic AI sparkle marks and emoji as primary brand assets.
- Check visual similarity and trademark conflicts before finalizing.

### Visual system
- Keep a disciplined palette with accessible contrast; test text, links, focus rings and quiz feedback in both light and dark surfaces.
- Define a type scale, spacing scale, border radius, elevation and content-width system.
- Use a readable body font and a distinctive display face only where it improves hierarchy.
- Create original subject illustrations and diagram styles; avoid a random mix of emoji, clip-art and unrelated stock images.
- Prefer simple, fast SVG illustrations and CSS diagrams over heavy animation.
- Design mobile-first at 320px, 360px, 390px and tablet/desktop widths.
- Meet WCAG 2.2 AA targets where practical: keyboard operation, visible focus, semantic headings, labels, contrast, reduced motion and screen-reader feedback.

### Required page templates
- Homepage: brand promise, choose level, explore subjects, featured learning paths, continue-learning entry (only if progress is available locally), featured practice and trust/about links.
- Subject hub: subject overview, level selector, units, skills, learning formats and prerequisites.
- Grade/level page: clear course map, unit groupings, completion/progress indicators and recommended order.
- Unit page: unit outcomes, skill sequence, practice availability, quiz and unit test.
- Lesson page: learning objectives, prerequisite knowledge, explanation sections, diagrams, worked examples, misconceptions, guided practice, independent practice, knowledge check, sources and next step.
- Practice page: one task at a time, accessible inputs, hint, check, worked explanation, progress and new question.
- Quiz page: clear instructions, progress, question navigation, answer review, score, topic-level diagnosis and retake with a fresh form.
- Worksheet page: printable clean layout, separate student sheet and answer key, source/attribution notes.
- Search/results page: useful filters by subject, grade, skill and format.

## 4. Learning architecture

Use a hierarchy:
Subject → Level/Grade → Course → Unit → Skill → Lesson/Resource → Practice → Quiz → Unit test.

A lesson is not automatically a whole skill. Split a large topic into teachable skills; do not split content artificially just to inflate page count.

Each unit should define:
- Target audience/grade range and curriculum-neutral scope note.
- Prerequisite skills.
- Measurable learning outcomes.
- Skill sequence and estimated time (honest estimates).
- Lesson resources and original diagrams.
- Formative practice and answer explanations.
- Skill checks and mastery criteria.
- Unit quiz and cumulative unit test.
- Further reading and source review date.

Each lesson should generally contain, when relevant:
1. Why this concept matters.
2. What the learner should already know.
3. Clear explanation in small sections.
4. More than one worked example, including reasoning and common wrong turns.
5. Visual model, table, diagram, trace or real-world application.
6. Guided practice with graduated hints.
7. Independent practice at more than one difficulty.
8. Misconceptions and how to correct them.
9. Short formative check.
10. Summary, next skill and reliable sources.

Depth must be appropriate to the subject. Do not pad lessons to hit arbitrary word counts. Use completeness and teachability as acceptance criteria.

## 5. Practice and quiz engine requirements

### Question-bank model
Every question should have:
- Stable unique ID.
- Subject, course, unit, skill and learning objective tags.
- Difficulty and question type.
- Prompt, options/input schema and correct answer.
- Step-by-step explanation, not just "Correct".
- Hint(s), where useful.
- Misconception tag for common wrong answers.
- Source/reviewer metadata for factual questions.
- Accessibility text for diagrams and any non-text prompt.

### Attempt behaviour
- Build a sufficiently large original bank per skill; target 25–40 questions for a normal foundational skill, increasing where the scope requires it. This is a target, not a substitute for quality.
- Generate a balanced attempt from tags/difficulty; avoid repeating questions within the same attempt.
- On retake, prefer unseen questions; only recycle after the available bank is exhausted, and disclose when a question repeats.
- Shuffle answer choices only when order is not meaningful (never shuffle numerical sequences, matching logic or ordered steps in a way that changes meaning).
- Give immediate or end-of-question feedback according to the exercise type.
- Explain why the selected answer is wrong and show the correct reasoning.
- Include multiple-choice, numeric response, short text, matching, ordering, true/false, diagram interpretation and scenario-based questions where suitable.
- Do not make every question multiple-choice.
- Store anonymous progress locally with clear privacy disclosure; explain that clearing browser data may reset progress.
- No account or cloud-sync claim until implemented and secured.

### Assessment ladder
- Quick check: 3–5 questions to diagnose initial understanding.
- Practice set: 6–10 focused items, with hints and explanations.
- Skill check: a fresh set with a mastery threshold.
- Unit quiz: balanced coverage across unit skills.
- Unit test: cumulative and slightly more challenging.
- Review mode: target weak skills and previously missed concepts.

Mastery criteria should be subject-specific and transparent. A single high score should not falsely imply durable mastery.

## 6. Subject and curriculum expansion

Maintain international-first, English-language, curriculum-neutral content, while clearly labeling grade/level guidance and avoiding false claims of alignment to national standards.

Build subject maps before bulk-writing lessons:
- Mathematics: number, fractions, decimals, percentages, ratio, algebra, geometry, measurement, statistics and probability.
- English: grammar, vocabulary, reading comprehension, writing, punctuation, speaking/listening and critical reading.
- Science: scientific method, biology, chemistry, physics, Earth/space science, data interpretation and practical investigation.
- Computer Science: computational thinking, algorithms, flowcharts, programming, Python, web technologies, data, networks and cybersecurity.
- AI Literacy: how AI works, prompting, verification, hallucinations, bias, privacy, safety, copyright and responsible use.
- Financial Literacy: money basics, budgeting, saving, spending, percentages, interest, risk, consumer awareness and digital finance safety.

For each subject:
- Map levels and prerequisites.
- Define units and skills.
- Identify authoritative/open sources and curriculum variations.
- Write original lesson material and questions.
- Review factual claims, calculations, examples, answer keys and age suitability.
- Add practice coverage and diagrams before marking a unit complete.

Do not publish empty course shells or label planned material as available.

## 7. Originality and editorial standard

- Use reference websites to understand structure and learning design only.
- Never copy their text, question wording, diagrams, screenshots, code or distinctive branding.
- Draft from learning objectives and independently checked subject knowledge.
- Use natural teacher-like language, varied examples and clear reasoning; avoid repetitive template prose and unsupported claims.
- Cite primary/authoritative sources for factual claims, especially science, computing, AI and finance.
- Distinguish established facts, simplifications, examples and opinions.
- Review calculations and answer keys independently.
- Add author/reviewer names only when real people have actually reviewed the material and consent to attribution.
- Keep a review date for topics that change.
- No AI-detector evasion or claims that content is human-written; quality is demonstrated by usefulness, accuracy and editorial review.

## 8. SEO, discovery and sustainable traffic

Traffic is an outcome, not a promise. Build for learners first:
- Clear subject/grade/unit/skill URLs and descriptive internal links.
- Unique title and meta description for every useful page.
- Self-referencing canonical, sitemap hygiene and crawlable navigation.
- Structured data only when the page genuinely qualifies; validate it.
- Descriptive image alt text and compressed original visuals.
- Topic clusters with prerequisite and next-step links.
- Search intent coverage based on actual student questions and gaps, not keyword stuffing.
- Original practice, interactive models, printable worksheets and worked examples that add value beyond a short generic article.
- Transparent About, editorial policy, sources, contact and privacy pages.
- Measure Search Console impressions/clicks, engagement and returning use; do not treat indexing requests as indexed status.
- Avoid publishing hundreds of thin pages to inflate URL count.

## 9. Technical and operational constraints

- Keep the current free GitHub + Cloudflare Pages setup unless a concrete requirement proves it inadequate.
- No paid APIs, paid fonts, paid image libraries or recurring services without explicit owner approval.
- Prefer static HTML/CSS/JS, reusable templates and locally stored progress initially.
- Keep page weight, JavaScript and third-party requests low.
- Use semantic HTML and progressive enhancement.
- Test at 320px, 360px, 390px, tablet and desktop.
- Automated checks: links, HTML, metadata, sitemap, quiz mappings, keyboard and accessibility smoke tests, responsive overflow, print styles and console errors.
- Human QA: subject-matter review, learner comprehension and screen-reader/keyboard testing.
- Keep all major redesign work on preview branches and draft PRs.
- No merge, production deployment, domain migration or paid-service activation without explicit approval.

## 10. Phased execution plan

### Phase A — Discovery and inventory
- Inventory every live subject, level, unit, lesson, quiz and worksheet.
- Record lesson depth, question count, practice types, source quality, visual assets and broken/placeholder elements.
- Audit current logos, icons, fonts, colours, navigation and mobile layouts.
- Build competitor feature matrix with evidence and distinguish observed features from assumptions.

### Phase B — Brand and design system
- Create 2–3 original logo directions and select one after comparison.
- Define brand palette, typography, icon family, illustration rules and component system.
- Design mobile and desktop mockups for homepage, subject hub, unit, lesson, practice and quiz.
- Test contrast, legibility and responsive behaviour before coding.

### Phase C — Learning engine prototype
- Implement question-bank schema and quiz generator.
- Add non-repeating retakes, feedback, hints, question types and local progress.
- Test determinism, answer validation, keyboard operation, reload behaviour and bank exhaustion.
- Keep the prototype on a preview branch.

### Phase D — Pilot course
- Rebuild Grade 6 Fractions as a complete unit with multiple skills, lesson resources, guided/independent practice, skill quizzes, cumulative quiz and unit test.
- Use original diagrams and examples.
- Have calculations and assessment reviewed independently.
- Run learner usability tests and browser QA.

### Phase E — Subject-by-subject rollout
- Apply the approved system to other Mathematics units.
- Then English, Science, Computer Science, AI Literacy and Financial Literacy.
- Expand grade coverage only after each subject's scope and review process are defined.
- Do not mark a course complete until its content and assessment coverage meet the rubric.

### Phase F — Release and measurement
- Review preview site on mobile and desktop.
- Check performance, accessibility, metadata, internal links, sitemap and structured data.
- Publish only after explicit release approval.
- Monitor actual learner behaviour and search performance; revise based on evidence.

## 11. Proposed internal acceptance rubric

Score each lesson/unit from 0–5 in each dimension, with evidence:
- Accuracy and source quality (25%)
- Teaching clarity and progression (20%)
- Worked examples and reasoning (15%)
- Practice, feedback and assessment quality (15%)
- Original value and useful visuals (10%)
- Audience/level suitability (5%)
- Accessibility and usability (5%)
- Transparency and maintenance (5%)

This is an internal editorial tool, not a Google ranking score or external certification. A lesson with a critical factual error cannot pass regardless of total score.

## 12. Immediate next deliverables

1. Full live-site inventory and visual audit (all pages, not a small sample).
2. Competitor matrix: Khan Academy, BBC Bitesize, CK-12, OpenStax, Brilliant and selected subject-specific platforms.
3. Logo/brand concept brief with 2–3 original directions.
4. Design system and page-template wireframes.
5. Grade 6 Fractions unit map and complete assessment blueprint.
6. Technical prototype plan for question-bank rotation and local progress.

## 13. Current status and safeguards

- This document is a research-backed strategy draft, not an implementation or release approval.
- No production files were changed as part of this strategy draft.
- No logo has been selected or replaced.
- Existing draft PRs remain separate and unmerged.
- The Algorithms mobile-overflow fix CI run #42146364198 completed successfully; PR #62 remains draft/open.


## 14. Built-in learning tools — keep learners inside Learnora

Product principle: when a student needs a calculator, graph, code runner, writing aid or subject-specific interactive tool to complete the lesson or explore a related problem, provide a relevant Learnora tool in the same learning flow wherever it is safe, feasible and useful. Tools must support learning rather than distract from it. Do not add a generic tool directory full of thin pages; integrate tools contextually into lessons, practice and subject hubs.

### Tool families and subject mapping

#### Mathematics
- Scientific calculator with clear order-of-operations display and accessible keyboard input.
- Fraction calculator: simplify, compare, add, subtract, multiply and divide fractions; show every step and visual fraction models.
- Percentage, ratio, proportion and decimal tools with explanation of the method, not just the answer.
- Algebra solver for supported equation types with step-by-step transformations and a clear scope/limitations notice.
- Graph plotter for linear and simple quadratic functions, tables of values, intercepts and slope exploration.
- Geometry tools: angle explorer, perimeter/area/volume calculators, coordinate plane and shape visualizer.
- Statistics tools: mean/median/mode/range, simple charts and probability experiments.
- Unit converter for length, mass, time, area, volume and temperature, with unit labels and conversion steps.
- Arithmetic/number-line and fraction-bar manipulatives for younger learners.

#### Science
- Periodic table with element facts and filters.
- Unit and scientific-notation converter; significant-figures helper.
- Formula rearrangement and graph/data plotting helpers, with worked steps and clearly stated formula assumptions.
- Interactive simulations for forces, circuits, waves, cells, states of matter and simple chemical models where scientifically valid.
- Lab-data table and graph builder for recording observations; never present a simulated result as a real experiment.
- Safety-first virtual lab activities where physical experiments are inappropriate.

#### English and literacy
- Grammar checker focused on teaching: identify a grammar concept, explain the rule and show a suggested correction; avoid silently rewriting student work.
- Sentence diagramming and parts-of-speech highlighter.
- Vocabulary builder, spelling practice, flashcards and spaced-revision lists.
- Reading-comprehension annotation workspace and evidence-from-text practice.
- Writing planner/outliner, paragraph structure coach and citation-format guide.
- Word counter and readability indicators, with cautions that readability scores are estimates, not grades.

#### Computer Science and programming
- In-browser code playground for HTML/CSS/JavaScript and selected beginner Python exercises if a safe local/runtime solution is available.
- Algorithm visualizer: step-through flowcharts, pseudocode traces, sorting and searching demonstrations.
- Binary/decimal/hexadecimal converter, logic-gate simulator and truth-table builder.
- HTML/CSS live preview and responsive layout sandbox.
- Debugging practice with intentionally flawed sample code and guided hints.
- Run code in a sandboxed environment only; never execute arbitrary student code on the production server or expose secrets, filesystem or network access.

#### AI Literacy
- Prompt-building practice sandbox using fixed, curated examples; clearly label when responses are simulated or generated.
- Source-verification checklist and claim/evidence comparison workspace.
- Bias and hallucination spotting activities using authored sample outputs.
- Privacy-safe scenario simulator; do not ask learners to enter personal or sensitive data.
- AI tool comparisons must be transparent about date, limitations and whether an external service is involved. No paid API by default.

#### Financial Literacy
- Budget planner with fictional/sample data and downloadable local worksheet.
- Savings-goal and compound-interest calculator with assumptions and clear explanation.
- Discount, tax, unit-price and simple/compound interest calculators.
- Needs-versus-wants decision activity and scenario-based financial practice.
- Tools are educational only, not personal financial advice; no bank connection or collection of financial account details.

#### Cross-subject study tools
- Flashcards with spaced practice and local progress.
- Notes workspace that stays in the browser unless the learner explicitly exports.
- Printable worksheet generator from curated question banks, with a separate answer key.
- Timed practice mode and optional focus timer.
- Search across Learnora lessons, definitions, worked examples and tools.
- Personal learning dashboard showing completed skills, recent practice and suggested next steps, with local-only progress initially.

### How tools appear in the learning journey
- Put a contextual tool link or embedded mini-tool next to the relevant concept (e.g. fraction model inside a fractions lesson), not an unrelated banner.
- Every tool should include a short purpose, instructions, one worked example, accessible controls, reset/clear action and a link back to the lesson.
- Where appropriate, add a "Try it yourself" activity and then a short reflection/check question so the tool teaches rather than merely computes.
- Allow learners to move from lesson → tool → practice → quiz without losing their place.
- Tools should work on mobile, keyboard and screen readers; provide a non-interactive explanation or table when an interactive visual cannot be accessed.
- Tool results must be reproducible and explain assumptions, units, rounding and supported input ranges.

### Tool quality, privacy and safety requirements
- Prefer client-side HTML/CSS/JavaScript tools that run locally and do not transmit learner inputs.
- Do not collect names, email addresses, school details, personal writing, financial details or other sensitive information to use a tool.
- No third-party tracking or external AI API calls in a learning tool by default.
- For code execution, use a properly isolated sandbox with strict CPU/time/memory limits and no secrets or unrestricted network; if this cannot be guaranteed on the free stack, begin with safe trace/visualization exercises rather than a live code runner.
- For grammar or AI helpers, clearly disclose whether processing is local, simulated or sent to an external service. Never imply a local tool uses AI if it does not.
- Show calculation steps and allow learners to inspect the method. Avoid black-box answer-only tools.
- Add automated tests for known input/output cases, boundary values, invalid input, keyboard interaction, mobile overflow and screen-reader announcements.
- Tools that provide only final answers should be separated from mastery assessments; teacher/learner settings can disable calculators during tests where mental calculation is the objective.
- Provide clear educational-use disclaimers for financial, health-adjacent, legal or other sensitive topics; do not expand into professional advice.
- Do not embed external websites in a way that exposes learners to unrelated ads, tracking or unsafe content. Prefer native Learnora tools.

### Prioritization under a free/no-budget constraint

Build in this order, based on broad usefulness and feasibility:
1. Calculator, fraction visualizer/calculator, percentage/ratio helper and unit converter.
2. Graph plotter, geometry explorer, statistics calculator and flashcards.
3. Worksheet/practice generator and local progress dashboard.
4. Algorithm/flowchart visualizer, binary converter and browser-based HTML/CSS/JS playground.
5. Periodic table, science graph/data tools and carefully scoped simulations.
6. Grammar/writing learning aids and financial literacy calculators.
7. Any AI-powered or server-executed features only after privacy, safety, cost and operational review.

This is a priority proposal, not a promise that every tool will be built at once. Start with tools that directly support the pilot course and reuse shared components.

### Tool acceptance checklist
A tool is ready only when:
- Its educational purpose and linked skills are documented.
- It produces correct, independently checked results for test cases.
- It explains the method and limitations.
- It has no hidden paid dependency and no unapproved external service.
- It works at 320px and larger, supports keyboard and accessible labels.
- It does not transmit or retain learner inputs unexpectedly.
- It links back into the relevant Learnora learning path.
- Its code, privacy behaviour and performance pass review.

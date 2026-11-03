document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.getElementById("print-worksheets");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
});

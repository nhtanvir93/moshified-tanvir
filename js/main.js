let collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", () => {
    collapsible.classList.toggle("collapsible--extended");
  });
});

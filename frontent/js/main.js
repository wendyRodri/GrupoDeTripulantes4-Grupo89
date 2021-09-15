document.addEventListener("click", (e) => {
  if (e.target.id === "arrow-up" ||
  e.target.className === "bi-arrow-up") {
    window.scroll(0, 0);
  }
});

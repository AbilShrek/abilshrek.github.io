window.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".news article");
  articles.forEach((a, i) => {
    setTimeout(() => a.classList.add("show"), i * 300);
  });
});
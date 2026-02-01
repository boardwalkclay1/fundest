const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
  });
}

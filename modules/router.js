export function navigate(url) {
  window.location.href = url;
}

document.addEventListener("click", e => {
  if (e.target.matches("[data-nav]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

// Shows a labeled placeholder instead of a broken-image icon for any
// product photo that hasn't been dropped into /images yet.
function markMissing(img) {
  const wrapper = img.closest(".produto-media");
  if (wrapper) {
    wrapper.classList.add("is-missing");
    wrapper.setAttribute("data-placeholder-label", img.alt || "Imagem pendente");
  }
}

document.querySelectorAll(".produto-media img").forEach((img) => {
  // The browser may have already fired (and missed) the error event by the
  // time this script runs, so check the already-broken case directly too.
  if (img.complete && img.naturalWidth === 0) {
    markMissing(img);
  } else {
    img.addEventListener("error", () => markMissing(img), { once: true });
  }
});

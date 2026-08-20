
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".media img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add("open");
    lightbox.classList.remove("zoom");
  });
});

lightboxImg.addEventListener("click", e => {
  e.stopPropagation();
  lightbox.classList.toggle("zoom");
});

function closeLightbox(){
  lightbox.classList.remove("open","zoom");
  lightboxImg.src = "";
}
closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeLightbox();
});

const search = document.getElementById("search");
search.addEventListener("input", () => {
  const term = search.value.trim().toLowerCase();
  document.querySelectorAll(".stage").forEach(stage => {
    const match = !term || stage.innerText.toLowerCase().includes(term);
    stage.classList.toggle("hidden", !match);
    if(term && match) stage.open = true;
  });
});

const images = document.querySelectorAll(".masonry-item img");
const overlay = document.getElementById("lightbox-overlay");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = 0;

// Open image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    overlay.style.display = "flex";
  });
});

// Close
closeBtn.onclick = () => (overlay.style.display = "none");

// Show image
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Prev
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

// Next
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

// Close on click outside image
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none";
});

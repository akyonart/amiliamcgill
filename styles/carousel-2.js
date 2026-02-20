document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("onsi-carousel-v3");
  const dotBar = document.getElementById("onsi-dots-v3");

  if (!carousel || !dotBar) return;

  const dots = dotBar.querySelectorAll(".v3-dot");

  const updateDots = () => {
    // We use clientWidth to get the exact width of the viewport
    const width = carousel.clientWidth;
    const scrollPos = carousel.scrollLeft;

    // Calculate index (0-7). The +10 is a buffer for browser sub-pixel errors.
    const index = Math.round(scrollPos / width);

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  // 1. Listen for native scroll
  carousel.addEventListener("scroll", updateDots);

  // 2. Handle window resizing to keep math accurate
  window.addEventListener("resize", updateDots);

  // 3. Dot navigation logic
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const width = carousel.clientWidth;
      carousel.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    });
  });

  // Initial call to set slide 1 as active
  updateDots();
});
document.querySelectorAll('.bullets a, .prevNext a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // This is the line that deletes the "jump"
    
    // Manually handle the sliding logic here instead
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    // ... logic to slide the carousel ...
  });
});
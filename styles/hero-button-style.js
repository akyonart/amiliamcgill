const button = document.querySelector(".stranger-btn");

// Optional: Subtle stretch effect when entering
button.addEventListener("mouseenter", () => {
  button.style.transform = "scale(1.02)";
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)";
});

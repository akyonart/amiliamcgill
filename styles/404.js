document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  if (!overlay) return;

  // Current spotlight position
  let spotlightX = window.innerWidth / 40;
  let spotlightY = window.innerHeight / 40;

  // Target position (follows mouse)
  let targetX = spotlightX;
  let targetY = spotlightY;

  // Update target on mouse move
  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  // Animate spotlight smoothly
  function animate() {
    // Ease towards target
    spotlightX += (targetX - spotlightX) * 0.15;
    spotlightY += (targetY - spotlightY) * 0.15;

    const pos = `${spotlightX}px ${spotlightY}px`;
    overlay.style.maskImage = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`;
    overlay.style.webkitMaskImage = overlay.style.maskImage;

    requestAnimationFrame(animate);
  }

  animate();
});

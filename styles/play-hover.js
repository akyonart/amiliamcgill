  const player = document.getElementById("spudbuds-lottie");
  const card = player.closest(".card-frame");

  card.addEventListener("mouseenter", () => {
    player.stop(); // This resets it to frame 0
    player.play();
  });

  card.addEventListener("mouseleave", () => {
    player.stop(); // This hides the "peeking" immediately when the mouse leaves
  });

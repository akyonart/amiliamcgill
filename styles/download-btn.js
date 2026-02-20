// script.js

document.getElementById("downloadBtn").addEventListener("click", function () {
  // Create a temporary link

  const link = document.createElement("a");

  link.href""; // Path to your CV file

  link.download = "My-CV.pdf"; // Name for the downloaded file

  link.click(); // Trigger the download
});

// script.js

document.getElementById("downloadBtn").addEventListener("click", function () {
  // Create a temporary link
  const link = document.createElement("a");

  link.href = "AmiliaMcGill_Resume.pdf"; // Path to your CV file
  link.download = "AmiliaMcGill-CV.pdf"; // Name for the downloaded file

  document.body.appendChild(link); // Append to DOM (recommended for compatibility)
  link.click(); // Trigger the download
  document.body.removeChild(link); // Clean up
});

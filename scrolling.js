const elementsToLoadIn = new Set([
  ...document.querySelectorAll(".hero-container"),
  ...document.querySelectorAll(".overview"),
  ...document.querySelectorAll(".tag"),
  ...document.querySelectorAll(".project-description"),
  ...document.querySelectorAll(".gallery-item"),
]);

elementsToLoadIn.forEach((el) => {
  el.classList.add("loadin");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("loaded", entry.isIntersecting);
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToLoadIn.forEach((el) => observer.observe(el));

let lastScroll = 0;
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll) {
    nav.classList.add("hide-nav"); // scrolling down
  } else {
    nav.classList.remove("hide-nav"); // scrolling up
  }

  lastScroll = current;
});

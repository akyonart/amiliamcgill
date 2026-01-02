const elementsToLoadIn = [
  ".hero-container",
  ".overview",
  ".tag",
  ".gallery-item",
];

// Select all elements based on the classes above
const allElements = document.querySelectorAll(elementsToLoadIn.join(","));

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // Trigger when 20% of the element is visible
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the class to trigger the CSS transition
      entry.target.classList.add("loaded");
      // STOP observing so it never flickers or disappears again
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

allElements.forEach((el) => observer.observe(el));

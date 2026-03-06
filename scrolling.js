document.addEventListener("DOMContentLoaded", () => {
  const revealSelectors = [
    "section",
    "main section",
    ".project-card",
    ".gallery-item",
    ".about-content",
    ".award-row",
    ".hero-text",
    ".hero-text-2",
    ".hero-container",
    ".overview",
    ".tag",
    ".project-description",
  ];

  const revealTargets = new Set();

  revealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!el.closest("nav")) {
        revealTargets.add(el);
      }
    });
  });

  const isIndexPage =
    window.location.pathname.endsWith("/index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

  if (isIndexPage) {
    const firstTwoCards = document.querySelectorAll(".project-card:nth-child(-n+2)");
    firstTwoCards.forEach((el) => {
      revealTargets.delete(el);
      el.classList.remove("loadin");
      el.classList.add("loaded");
      el.style.removeProperty("--reveal-delay");
    });
  }

  const allElements = Array.from(revealTargets);
  if (!allElements.length) return;

  const staggerSelectors = [".project-card", ".gallery-item", ".award-row", ".tag"];
  const staggerStep = 0.1;

  staggerSelectors.forEach((selector) => {
    const groups = new Map();

    document.querySelectorAll(selector).forEach((el) => {
      if (!revealTargets.has(el)) return;
      const parent = el.parentElement;
      if (!parent) return;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });

    groups.forEach((group) => {
      group.forEach((el, index) => {
        el.style.setProperty("--reveal-delay", `${(index * staggerStep).toFixed(2)}s`);
      });
    });
  });

  allElements.forEach((el) => el.classList.add("loadin"));

  if (!("IntersectionObserver" in window)) {
    allElements.forEach((el) => el.classList.add("loaded"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("loaded");
        io.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px 12% 0px",
      threshold: 0.05,
    },
  );

  allElements.forEach((el) => observer.observe(el));
});

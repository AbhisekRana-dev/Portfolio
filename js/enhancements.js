
// =========================================
// PORTFOLIO ENHANCEMENTS
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;

  // -----------------------------------------
  // 1. SCROLL PROGRESS BAR
  // -----------------------------------------

  const progress = document.createElement("div");

  progress.id = "reading-progress";
  progress.setAttribute("aria-hidden", "true");

  document.body.prepend(progress);

  function updateProgress() {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const percent =
      scrollable > 0
        ? (window.scrollY / scrollable) * 100
        : 0;

    progress.style.width = Math.min(100, percent) + "%";
  }

  window.addEventListener("scroll", updateProgress, {
    passive: true
  });

  window.addEventListener("resize", updateProgress);

  updateProgress();

  // -----------------------------------------
  // 2. DARK / LIGHT THEME
  // -----------------------------------------

  const themeButton = document.createElement("button");

  themeButton.id = "theme-toggle";
  themeButton.className = "portfolio-float-button";
  themeButton.type = "button";
  themeButton.setAttribute("aria-label", "Toggle theme");
  themeButton.title = "Switch theme";

  document.body.appendChild(themeButton);

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (theme === "dark") {
      themeButton.textContent = "☀";
      themeButton.setAttribute(
        "aria-label",
        "Switch to light mode"
      );
      themeButton.title = "Switch to light mode";
    } else {
      themeButton.textContent = "☾";
      themeButton.setAttribute(
        "aria-label",
        "Switch to dark mode"
      );
      themeButton.title = "Switch to dark mode";
    }

    try {
      localStorage.setItem(
        "abhisek-portfolio-theme",
        theme
      );
    } catch (error) {
      // The theme still works when storage is unavailable.
    }
  }

  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(
      "abhisek-portfolio-theme"
    );
  } catch (error) {
    // Use light mode by default.
  }

  setTheme(savedTheme === "dark" ? "dark" : "light");

  themeButton.addEventListener("click", function () {
    const currentTheme = root.getAttribute("data-theme");

    setTheme(
      currentTheme === "dark" ? "light" : "dark"
    );
  });

  // -----------------------------------------
  // 3. BACK TO TOP BUTTON
  // -----------------------------------------

  const topButton = document.createElement("button");

  topButton.id = "back-to-top";
  topButton.className = "portfolio-float-button";
  topButton.type = "button";
  topButton.textContent = "↑";
  topButton.title = "Back to top";
  topButton.setAttribute("aria-label", "Back to top");

  document.body.appendChild(topButton);

  function updateTopButton() {
    topButton.classList.toggle(
      "visible",
      window.scrollY > 350
    );
  }

  window.addEventListener("scroll", updateTopButton, {
    passive: true
  });

  updateTopButton();

  topButton.addEventListener("click", function () {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth"
    });
  });

  // -----------------------------------------
  // 4. REVEAL ANIMATIONS ON SCROLL
  // -----------------------------------------

  const revealTargets = document.querySelectorAll(
    ".heading-section, " +
    ".resume-wrap, " +
    ".project, " +
    ".services-1, " +
    ".blog-entry, " +
    ".contact-info, " +
    ".contact-form"
  );

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    "IntersectionObserver" in window &&
    !reducedMotion
  ) {
    const observer = new IntersectionObserver(
      function (entries, currentObserver) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealTargets.forEach(function (element) {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });
  } else {
    revealTargets.forEach(function (element) {
      element.classList.add("revealed");
    });
  }

  // -----------------------------------------
  // 5. MOBILE NAVIGATION
  // -----------------------------------------

  document
    .querySelectorAll("#ftco-nav .nav-link")
    .forEach(function (link) {
      link.addEventListener("click", function () {
        const menu = document.getElementById("ftco-nav");

        if (
          menu &&
          menu.classList.contains("show") &&
          window.jQuery &&
          typeof window.jQuery.fn.collapse === "function"
        ) {
          window.jQuery(menu).collapse("hide");
        }
      });
    });

  // -----------------------------------------
  // 6. COPYRIGHT YEAR
  // -----------------------------------------

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

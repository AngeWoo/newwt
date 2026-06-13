// ============================================================
//  寒修行｜真如苑 — 互動腳本
// ============================================================

// ---- 行動版選單 ----
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  const closeNav = () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeNav();
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
}

// ---- 捲動時的頁首樣式 ----
const header = document.querySelector(".site-header");
if (header) {
  const syncHeader = () => header.classList.toggle("scrolled", window.scrollY > 60);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

// ---- 快速捲動按鈕 ----
const scrollTopButton = document.querySelector(".scroll-top");
const scrollBottomButton = document.querySelector(".scroll-bottom");

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
if (scrollBottomButton) {
  scrollBottomButton.addEventListener("click", () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
  );
}

// ---- 分類篩選（法會影片、最新訊息） ----
document.querySelectorAll("[data-filter-group]").forEach((group) => {
  const targets = document.querySelectorAll(group.getAttribute("data-filter-target"));
  const buttons = group.querySelectorAll("[data-filter]");

  const apply = (button) => {
    const category = button.getAttribute("data-filter");
    buttons.forEach((other) => other.classList.toggle("active", other === button));
    targets.forEach((item) => {
      const cats = (item.getAttribute("data-cat") || "").split(/\s+/);
      const show = category === "all" || cats.includes(category);
      item.classList.toggle("is-hidden", !show);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => apply(button));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        apply(button);
      }
    });
  });
});

// ---- 進場淡入 ----
const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  document.documentElement.classList.add("js");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("in"));
  }
}

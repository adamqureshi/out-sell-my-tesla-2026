/* OUT — Sell My Tesla (Public page 2026)
   Minimal JS: mobile menu toggle + smooth anchor close.
*/

(function () {
  const menuBtn = document.querySelector("[data-menu]");
  const menu = document.querySelector("[data-mobile-menu]");

  function closeMenu() {
    if (!menu) return;
    menu.hidden = true;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!menu) return;
    const open = menu.hidden;
    menu.hidden = !open;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  // Close menu when clicking a link
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("#")) closeMenu();
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

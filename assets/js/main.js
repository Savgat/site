/* Interactions du site : menu mobile + filtre des catégories du blog. */
(function () {
  "use strict";

  /* --- Menu mobile --------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    // Referme le menu quand on clique un lien (mobile).
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Filtre des catégories (page blog) ----------------------- */
  var filterBar = document.querySelector("[data-filter-bar]");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll(".filter-btn");
    var cards = document.querySelectorAll("[data-category]");
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      var cat = btn.getAttribute("data-cat");

      buttons.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
      cards.forEach(function (card) {
        var show = cat === "all" || card.getAttribute("data-category") === cat;
        card.classList.toggle("is-hidden", !show);
      });
    });
  }
})();

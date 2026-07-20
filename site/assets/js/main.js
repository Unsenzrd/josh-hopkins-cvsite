(function () {
  "use strict";

  var THEMES = { ivory: "ivory", onyx: "onyx" };
  var STORAGE_KEY = "jhcv-theme";
  var root = document.documentElement;
  var toggleBtn = document.getElementById("theme-toggle");
  var moonIcon = toggleBtn.querySelector('[data-icon="moon"]');
  var sunIcon = toggleBtn.querySelector('[data-icon="sun"]');

  function applyTheme(mode) {
    root.setAttribute("data-theme", mode);
    var dark = mode === THEMES.onyx;
    sunIcon.hidden = !dark;
    moonIcon.hidden = dark;
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
  }

  function initialTheme() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return stored === THEMES.onyx || stored === THEMES.ivory ? stored : THEMES.ivory;
  }

  applyTheme(initialTheme());

  toggleBtn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") === THEMES.onyx ? THEMES.onyx : THEMES.ivory;
    applyTheme(current === THEMES.onyx ? THEMES.ivory : THEMES.onyx);
  });

  // Email address is assembled only at click-time so it never sits in the
  // page source as plain text/markup for scrapers to harvest.
  var emailBtn = document.getElementById("email-me");
  if (emailBtn) {
    emailBtn.addEventListener("click", function () {
      var user = ["c", "o", "d", "e", "y", "o", "u", "r", "w", "o", "r", "l", "d"].join("");
      var domain = ["g", "m", "a", "i", "l", ".", "c", "o", "m"].join("");
      window.location.href = "mailto:" + user + "@" + domain;
    });
  }
})();

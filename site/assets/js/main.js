(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "jhcv-theme";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // ---------- Theme ----------
  // The initial theme is set inline in <head> (stored choice, else the OS
  // preference). This only wires up the toggle and keeps its state honest.
  var toggleBtn = document.getElementById("theme-toggle");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncToggle() {
    toggleBtn.setAttribute("aria-checked", currentTheme() === "dark" ? "true" : "false");
  }

  syncToggle();

  toggleBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    syncToggle();
  });

  // ---------- Active section in the nav ----------
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  if ("IntersectionObserver" in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var sections = navLinks
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);
    var setCurrent = function (id) {
      navLinks.forEach(function (a) {
        if (a === byId[id]) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    // A section is current while it crosses a thin line 35–40% down the viewport.
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    sections.forEach(function (s) { sectionObserver.observe(s); });
    window.addEventListener("scroll", function () {
      if (window.scrollY < 200) setCurrent(null);
    }, { passive: true });
  }

  // ---------- Colour-bar mesh ----------
  // At rest the mesh drifts steadily while a slow "ghost" focus wanders across
  // the bar, lighting the links near it; this hints the bar is interactive.
  // Moving the pointer over the bar hands the focus to the pointer and wakes
  // the mesh (brighter links, faster drift, parallax); when the pointer leaves,
  // the ghost takes over again and the mesh settles back to its resting pace.
  var mesh = document.querySelector(".stripe-mesh");
  if (mesh && mesh.getContext) {
    var ctx = mesh.getContext("2d");
    var bar = mesh.parentElement;
    var nodes = [], W = 0, H = 0, dpr = 1;
    var LINK = 96;
    var rgb = "244,244,241";

    var readColour = function () {
      var hex = getComputedStyle(root).getPropertyValue("--paper").trim().replace("#", "");
      if (hex.length === 6) {
        rgb = [0, 2, 4].map(function (o) { return parseInt(hex.substr(o, 2), 16); }).join(",");
      }
    };
    readColour();

    var seed = function () {
      var count = Math.max(24, Math.min(90, Math.round(W * H / 1500)));
      nodes = [];
      for (var n = 0; n < count; n++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H, z: Math.random(), p: Math.random() * 6.28 });
      }
    };
    var resize = function () {
      var r = mesh.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var resized = Math.round(r.width) !== W || Math.round(r.height) !== H;
      W = Math.round(r.width);
      H = Math.round(r.height);
      mesh.width = W * dpr;
      mesh.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (resized) seed();
    };
    resize();

    var wake = 0, wakeAim = 0, clock = 0;
    var pointerX = 0, pointerY = 0, onBar = false;
    var fx = -9999, fy = -9999; // the focus point: the ghost at rest, the pointer on hover

    if (finePointer && !reduceMotion) {
      bar.parentElement.addEventListener("pointermove", function (e) {
        var r = mesh.getBoundingClientRect();
        pointerX = e.clientX - r.left;
        pointerY = e.clientY - r.top;
        onBar = true;
        wakeAim = 1;
      });
      bar.parentElement.addEventListener("pointerleave", function () {
        onBar = false;
        wakeAim = 0;
      });
    }

    var ghostX = function () { return W * (0.5 + 0.44 * Math.sin(clock * 0.11) * Math.cos(clock * 0.047)); };
    var ghostY = function () { return H * (0.5 + 0.34 * Math.sin(clock * 0.29 + 1.3)); };

    var pos = [];
    var draw = function () {
      ctx.clearRect(0, 0, W, H);
      var shift = (fx > -9999 ? (fx / W - 0.5) : 0) * (0.35 + 0.65 * wake);
      for (var i = 0; i < nodes.length; i++) {
        var nd = nodes[i];
        pos[i] = [
          nd.x + shift * 22 * nd.z,
          nd.y + Math.sin(clock * 0.7 + nd.p) * (3 + 3 * wake) * nd.z,
          nd.z
        ];
      }
      ctx.lineWidth = 1;
      var base = 0.15 + 0.23 * wake;
      var glow = 0.3 + 0.2 * wake;          // how strongly links light up near the focus
      var reach = 150 + 40 * wake;           // how far the focus reaches
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = pos[a][0] - pos[b][0], dy = pos[a][1] - pos[b][1];
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            var mx = (pos[a][0] + pos[b][0]) / 2 - fx, my = (pos[a][1] + pos[b][1]) / 2 - fy;
            var near = Math.max(0, 1 - Math.sqrt(mx * mx + my * my) / reach);
            var alpha = (1 - d / LINK) * (base + glow * near) * (0.5 + 0.5 * (pos[a][2] + pos[b][2]) / 2);
            ctx.strokeStyle = "rgba(" + rgb + "," + alpha.toFixed(3) + ")";
            ctx.beginPath();
            ctx.moveTo(pos[a][0], pos[a][1]);
            ctx.lineTo(pos[b][0], pos[b][1]);
            ctx.stroke();
          }
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var z = pos[k][2];
        var nx = pos[k][0] - fx, ny = pos[k][1] - fy;
        var lit = Math.max(0, 1 - Math.sqrt(nx * nx + ny * ny) / reach);
        ctx.fillStyle = "rgba(" + rgb + "," + Math.min(1, (0.28 + 0.25 * wake) + 0.35 * z + 0.3 * lit).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(pos[k][0], pos[k][1], 0.9 + 1.4 * z + 0.8 * lit, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    new MutationObserver(function () { readColour(); draw(); })
      .observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", function () { resize(); draw(); });

    if (reduceMotion) {
      fx = W * 0.62; fy = H * 0.45;
      draw();
    } else {
      var visible = true, last = 0;
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
      }).observe(mesh);
      var frame = function (t) {
        var dt = Math.min((t - last) / 1000, 0.05);
        last = t;
        if (visible && !document.hidden) {
          // Wake quickly, settle slowly.
          wake += (wakeAim - wake) * (wakeAim > wake ? 0.08 : 0.02);
          clock += dt;
          // Ease the focus towards the pointer while hovering, else the ghost.
          var tx = onBar ? pointerX : ghostX(), ty = onBar ? pointerY : ghostY();
          if (fx === -9999) { fx = tx; fy = ty; }
          fx += (tx - fx) * (onBar ? 0.18 : 0.04);
          fy += (ty - fy) * (onBar ? 0.18 : 0.04);
          var speed = 7 + 11 * wake;
          for (var i = 0; i < nodes.length; i++) {
            var nd = nodes[i];
            nd.x += speed * (0.4 + nd.z) * dt;
            if (nd.x > W + 20) { nd.x = -20; nd.y = Math.random() * H; }
          }
          draw();
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }

  // ---------- Email ----------
  // The address is assembled only when someone asks for it, so it never sits
  // in the page source for scrapers. Clicking tries the mail app and also
  // shows the address with a copy button, in case no mail app is set up.
  var reveal = document.getElementById("email-reveal");
  var addressEl = document.getElementById("email-address");
  var copyBtn = document.getElementById("email-copy");
  var statusEl = document.getElementById("email-status");
  var HELP = "If your email app didn't open, copy the address and email me directly.";

  function address() {
    var user = ["c", "o", "d", "e", "y", "o", "u", "r", "w", "o", "r", "l", "d"].join("");
    var domain = ["g", "m", "a", "i", "l", ".", "c", "o", "m"].join("");
    return user + "@" + domain;
  }

  function showAddress() {
    if (!reveal) return;
    addressEl.textContent = address();
    reveal.hidden = false;
    // Re-write the help text so screen readers announce the reveal.
    statusEl.textContent = "";
    setTimeout(function () { statusEl.textContent = "Email address shown. " + HELP; }, 50);
  }

  function emailMe(e) {
    if (e) e.preventDefault();
    showAddress();
    var contact = document.getElementById("contact");
    if (contact && e && e.currentTarget && e.currentTarget.id !== "email-me") {
      contact.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
    window.location.href = "mailto:" + address();
  }

  Array.prototype.forEach.call(document.querySelectorAll(".js-email"), function (el) {
    el.addEventListener("click", emailMe);
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = address();
      var done = function () {
        copyBtn.textContent = "Copied";
        statusEl.textContent = "Address copied to your clipboard.";
        setTimeout(function () {
          copyBtn.textContent = "Copy address";
          statusEl.textContent = HELP;
        }, 2500);
      };
      var fail = function () {
        // Fall back to selecting the address so it can be copied by hand.
        var range = document.createRange();
        range.selectNodeContents(addressEl);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        statusEl.textContent = "Couldn't copy automatically. The address is selected, so press Ctrl+C or Cmd+C.";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fail);
      } else {
        fail();
      }
    });
  }
})();

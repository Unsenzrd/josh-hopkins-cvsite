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

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Split the hero name into per-letter spans for the 3D flip-in. The heading
  // keeps an aria-label so screen readers still hear the plain name.
  var heading = document.querySelector(".hero h1");
  if (heading && !reduceMotion) {
    var name = heading.textContent.trim();
    var i = 0;
    heading.setAttribute("aria-label", name);
    heading.innerHTML = name.split(" ").map(function (word) {
      var chars = word.split("").map(function (ch) {
        return '<span class="h1-char" style="--i:' + (i++) + '">' + ch + "</span>";
      }).join("");
      i++;
      return '<span class="h1-word" aria-hidden="true">' + chars + "</span>";
    }).join(" ");
  }

  // Pointer-follow 3D tilt. data-tilt holds the max angle in degrees.
  if (finePointer && !reduceMotion) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-tilt]"), function (el) {
      var max = parseFloat(el.getAttribute("data-tilt")) || 6;
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        el.classList.add("is-tilting");
        el.style.setProperty("--mx", (px * 100) + "%");
        el.style.setProperty("--my", (py * 100) + "%");
        el.style.transform = "perspective(900px) rotateX(" + ((0.5 - py) * max * 2).toFixed(2) +
          "deg) rotateY(" + ((px - 0.5) * max * 2).toFixed(2) + "deg)";
      });
      el.addEventListener("pointerleave", function () {
        el.classList.remove("is-tilting");
        el.style.transform = "";
      });
    });
  }

  // Drifting node mesh inside the hero stripe. Each node has a depth (z):
  // nearer nodes are larger, brighter, drift faster and shift more with the
  // pointer, which gives the flat band a parallax sense of 3D.
  var mesh = document.querySelector(".stripe-mesh");
  if (mesh && mesh.getContext) {
    var ctx = mesh.getContext("2d");
    var nodes = [], W = 0, H = 0, dpr = 1;
    var LINK = 120;

    var rgb = "215,227,213";
    var readColour = function () {
      var hex = getComputedStyle(root).getPropertyValue("--stripe-mesh").trim().replace("#", "");
      if (hex.length === 6) {
        rgb = [0, 2, 4].map(function (o) { return parseInt(hex.substr(o, 2), 16); }).join(",");
      }
    };
    readColour();

    var seed = function () {
      var count = Math.max(36, Math.min(130, Math.round(W * H / 3400)));
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

    var aimX = 0, aimY = 0, curX = 0, curY = 0, clock = 0;
    if (finePointer) {
      window.addEventListener("pointermove", function (e) {
        aimX = (e.clientX / window.innerWidth - 0.5) * 2;
        aimY = (e.clientY / window.innerHeight - 0.5) * 2;
      });
    }

    var pos = [];
    var draw = function () {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < nodes.length; i++) {
        var nd = nodes[i];
        pos[i] = [
          nd.x + curX * 26 * nd.z,
          nd.y + curY * 12 * nd.z + Math.sin(clock * 0.6 + nd.p) * 4 * nd.z,
          nd.z
        ];
      }
      ctx.lineWidth = 1;
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = pos[a][0] - pos[b][0], dy = pos[a][1] - pos[b][1];
          var dz = (pos[a][2] - pos[b][2]) * 90;
          var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < LINK) {
            var alpha = (1 - d / LINK) * (0.12 + 0.3 * (pos[a][2] + pos[b][2]) / 2);
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
        ctx.fillStyle = "rgba(" + rgb + "," + (0.25 + 0.55 * z).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(pos[k][0], pos[k][1], 0.8 + 1.8 * z, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    new MutationObserver(function () { readColour(); if (reduceMotion) draw(); })
      .observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", function () { resize(); if (reduceMotion) draw(); });

    if (reduceMotion) {
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
          clock += dt;
          for (var i = 0; i < nodes.length; i++) {
            var nd = nodes[i];
            nd.x += (6 + 16 * nd.z) * dt;
            if (nd.x > W + 30) { nd.x = -30; nd.y = Math.random() * H; }
          }
          curX += (aimX - curX) * 0.04;
          curY += (aimY - curY) * 0.04;
          draw();
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }

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

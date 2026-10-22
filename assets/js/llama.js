// A small pixel llama that wanders along the footer's patchwork band, stops to graze on it
// (the bites grow back), and reacts when someone pets it. Pure decoration: if this script
// does not run, nothing is missing. With reduced motion it stands still and only shows a heart.
(function () {
  var band = document.querySelector(".site-footer");
  if (!band || !window.requestAnimationFrame) return;
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Pixel art in the site palette; "o" is the outline, added around the shape when drawn.
  // Wool, shade, muzzle, eye and hooves come from CSS so the coat can change with the theme;
  // the woven blanket and the ear tassel keep the site colours in both themes.
  var COLORS = { o: "#051230", e: "var(--llama-e)", w: "var(--llama-w)", s: "var(--llama-s)", m: "var(--llama-m)", r: "var(--llama-r)", a: "#f68c50", l: "#a6a159", t: "#a2441b" };
  var EMPTY = "....................";
  var HEAD_UP = [
    "..............w.w...",
    "..............w.w...",
    ".............awwww..",
    ".............twweww.",
    "..............wwwwmm",
    "..............wwwmm.",
    "..............wsw...",
    "..............wws...",
    "..............wsw...",
    ".w............wws...",
    "ww...........wwsw..."
  ];
  var BODY = [
    "wswwtlalalaltwsww...",
    ".wwwaaaaaaaaawwsw...",
    ".swwtlalalaltwww....",
    "..wsaaaaaaaaaswsw...",
    "..s.a.a.a.a.a.s....."
  ];
  var LEGS_A = ["..w.s........w.s....", "..w.s........w.s....", "..r.r........r.r...."];
  var LEGS_B = ["..w..s......w..s....", ".w....s....w....s...", ".r....r....r....r..."];
  // grazing: the neck bends down so the muzzle reaches the band
  var GRAZE = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY,
    ".w..................",
    "ww..................",
    "wswwtlalalaltwwws...",
    ".wwwaaaaaaaaawwsww.w",
    ".swwtlalalaltwww.wsw",
    "..wsaaaaaaaaaswsawww",
    "..s.a.a.a.a.a.s.twew"
  ];
  var FRAMES = {
    stand: HEAD_UP.concat(BODY, LEGS_A),
    step: HEAD_UP.concat(BODY, LEGS_B),
    sit: [EMPTY, EMPTY, EMPTY].concat(HEAD_UP, BODY.slice(0, 4), [".rswswswswswswsr...."]),
    graze: GRAZE.concat(["..w.s........w.s..ww", "..w.s........w.s.mmw", "..r.r........r.r.mm."]),
    chew: GRAZE.concat(["..w.s........w.s.mmw", "..w.s........w.s.mm.", "..r.r........r.r...."])
  };
  var HEART = [".a.a.", "aaaaa", "aaaaa", ".aaa.", "..a.."];

  function draw(rows) {
    var w = rows[0].length + 2, h = rows.length + 2, rects = "";
    function at(x, y) { var c = (rows[y - 1] || "")[x - 1]; return c && c !== "." ? c : ""; }
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var c = at(x, y) || (at(x - 1, y) || at(x + 1, y) || at(x, y - 1) || at(x, y + 1) ? "o" : "");
        if (c) rects += '<rect x="' + x + '" y="' + y + '" width="1" height="1" style="fill:' + COLORS[c] + '"/>';
      }
    }
    return '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + " " + h + '" shape-rendering="crispEdges">' + rects + "</svg>";
  }
  var svgs = {};
  for (var name in FRAMES) {
    svgs[name] = draw(FRAMES[name]);
    // the same frame with the eye shut, for blinks and naps
    svgs[name + "-blink"] = draw(FRAMES[name].map(function (row) { return row.replace("e", "s"); }));
  }
  var heartSvg = draw(HEART);

  var llama = document.createElement("button");
  llama.type = "button";
  llama.className = "llama";
  llama.setAttribute("aria-label", "Pet the llama");
  llama.innerHTML = '<span class="llama-body"><span class="llama-sprite"></span></span>';
  var sprite = llama.querySelector(".llama-sprite");
  band.appendChild(llama);

  var x = 0, dir = 1, state = "walk", until = 0, flip = 0, flipAt = 0, shown = "", bite = null;
  var blinkUntil = 0, nextBlink = 0, zAt = 0;
  function room() { return Math.max(0, band.clientWidth - llama.offsetWidth); }
  function rand(min, max) { return min + Math.random() * (max - min); }

  function render(now) {
    var frame = "stand";
    if (state === "walk" || state === "run") frame = flip ? "step" : "stand";
    else if (state === "graze") frame = flip ? "chew" : "graze";
    else if (state === "sit" || state === "nap") frame = "sit";
    if (state === "nap" || now < blinkUntil) frame += "-blink";
    if (frame !== shown) { sprite.innerHTML = svgs[frame]; shown = frame; }
    llama.style.transform = "translateX(" + x + "px)";
    sprite.style.transform = "scaleX(" + dir + ")";
  }

  // Share of the sprite's width where the mouth is, for bites and spit
  function mouth(share) { return dir > 0 ? share : 1 - share; }

  function setState(next, seconds, now) {
    state = next;
    until = now + seconds * 1000;
    if (next === "graze") {
      bite = document.createElement("span");
      bite.className = "llama-bite";
      bite.style.left = x + llama.offsetWidth * mouth(0.84) + "px";
      bite.style.animationDuration = seconds + "s, 1.5s";
      band.appendChild(bite);
      var done = bite;
      setTimeout(function () { done.remove(); }, (seconds + 11) * 1000);
    }
  }

  function decide(now) {
    var roll = Math.random();
    if (state === "walk" && roll < 0.55) return setState("graze", rand(2.5, 4.5), now);
    if (state === "walk" && roll < 0.7) return setState("nap", rand(4, 6), now);
    if (state === "walk") return setState("idle", rand(1, 2), now);
    if (Math.random() < 0.3) dir = -dir;
    setState("walk", rand(3, 6), now);
  }

  var running = false, last = 0;
  function tick(now) {
    if (!running) return;
    var dt = Math.min(now - last, 100) / 1000;
    last = now;
    if (now > until) decide(now);
    var max = room();
    if (state === "walk" || state === "run") {
      x += dir * (state === "run" ? 90 : 16) * dt;
      if (x <= 0) dir = 1;
      if (x >= max) dir = -1;
    }
    x = Math.min(Math.max(x, 0), max);
    if (now - flipAt > (state === "run" ? 110 : state === "graze" ? 320 : 240)) { flip ^= 1; flipAt = now; }
    if (now > nextBlink) { blinkUntil = now + 150; nextBlink = now + rand(2000, 5000); }
    if (state === "nap" && now > zAt) { pop("llama-z", "z", mouth(0.76), 1.6); zAt = now + 900; }
    render(now);
    requestAnimationFrame(tick);
  }

  function pop(className, html, left, seconds) {
    var el = document.createElement("span");
    el.className = className;
    el.innerHTML = html;
    el.style.left = left * 100 + "%";
    el.style.setProperty("--dir", dir);
    llama.appendChild(el);
    setTimeout(function () { el.remove(); }, seconds * 1000);
  }

  // Each pet gets the next reaction, so repeat visitors see them all
  var reactions = [
    function (now) {
      setState("idle", 1.2, now);
      llama.classList.remove("hop");
      void llama.offsetWidth; // restart the hop animation
      llama.classList.add("hop");
      pop("llama-heart", heartSvg, mouth(0.76), 1.2);
    },
    function (now) {
      setState("idle", 1, now);
      pop("llama-spit", "", mouth(0.9), 0.7);
    },
    function (now) { setState("sit", 2.5, now); },
    function (now) { dir = -dir; setState("run", 1.6, now); }
  ];
  // The first pet startles it: a "!" and it runs off, away from the side it was touched on
  // (a keyboard press has no side, so it just turns around)
  function shy(event, now) {
    var r = llama.getBoundingClientRect();
    if (!event.detail) dir = -dir;
    else dir = event.clientX > r.left + r.width / 2 ? -1 : 1;
    pop("llama-z llama-shy", "!", mouth(0.76), 0.8);
    setState("run", 1.8, now);
  }

  var petted = 0;
  llama.addEventListener("click", function (event) {
    if (still) return pop("llama-heart", heartSvg, mouth(0.76), 1.2);
    var now = performance.now();
    if (petted++ === 0) return shy(event, now);
    reactions[(petted - 2) % reactions.length](now);
  });

  // A new spot and heading on every page load
  x = room() * Math.random();
  dir = Math.random() < 0.5 ? 1 : -1;
  render(0);
  if (still) return;

  // Only walk while the band is on screen and the tab is visible
  var onScreen = false;
  function update() {
    var go = onScreen && !document.hidden;
    if (go && !running) { running = true; last = performance.now(); requestAnimationFrame(tick); }
    if (!go) running = false;
  }
  new IntersectionObserver(function (entries) { onScreen = entries[0].isIntersecting; update(); }).observe(llama);
  document.addEventListener("visibilitychange", update);

  // When a mouse comes close, it stops what it is doing and turns to look (a nap is not interrupted)
  var lookedAt = 0;
  document.addEventListener("pointermove", function (event) {
    var now = performance.now();
    if (!running || event.pointerType !== "mouse" || now - lookedAt < 150) return;
    if (state !== "walk" && state !== "graze" && state !== "idle") return;
    lookedAt = now;
    var r = llama.getBoundingClientRect(), cx = r.left + r.width / 2;
    if (Math.abs(event.clientX - cx) > 90 || Math.abs(event.clientY - (r.top + r.height / 2)) > 70) return;
    dir = event.clientX < cx ? -1 : 1;
    setState("idle", 1.5, now);
  }, { passive: true });
})();

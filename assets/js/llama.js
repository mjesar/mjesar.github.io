// A small pixel llama that wanders along the footer's patchwork band, stops to graze on it
// (the bites grow back), and reacts when someone pets it. Pure decoration: if this script
// does not run, nothing is missing. With reduced motion it stands still and only shows a heart.
(function () {
  var band = document.querySelector(".site-footer");
  if (!band || !window.requestAnimationFrame) return;
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Pixel art in the site palette; "o" is the outline, added around the shape when drawn
  var COLORS = { o: "#051230", e: "#051230", w: "#f4ecdc", s: "#d9c9ab", a: "#f68c50", l: "#a6a159", r: "#a2441b" };
  var EMPTY = "................";
  var HEAD_UP = [
    ".........w.w....",
    ".........www....",
    "........wwwww...",
    "........wwweww..",
    "........wwwwwr..",
    "........wwww....",
    "........www.....",
    "........www....."
  ];
  var BODY = [
    ".wwwaaaawww.....",
    "wwwwalaawww.....",
    "wwwwaaaawww.....",
    ".wwwwwwwwww....."
  ];
  var LEGS_A = [".w.s....w.s.....", ".w.s....w.s.....", ".r.r....r.r....."];
  var LEGS_B = [".w.s....w.s.....", "w...s..w...s....", "r...r..r...r...."];
  var GRAZE = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, ".wwwaaaawww.....", "wwwwalaawwww....", "wwwwaaaawwwwww.w"];
  var FRAMES = {
    stand: HEAD_UP.concat(BODY, LEGS_A),
    step: HEAD_UP.concat(BODY, LEGS_B),
    sit: [EMPTY, EMPTY, EMPTY].concat(HEAD_UP, BODY.slice(0, 3), [".rwwwwwwwwr....."]),
    graze: GRAZE.concat([".wwwwwwwwww.www.", ".w.s....w.s.wwew", ".w.s....w.s..www", ".r.r....r.r...wr"]),
    chew: GRAZE.concat([".wwwwwwwwww.wwew", ".w.s....w.s..www", ".w.s....w.s...wr", ".r.r....r.r....."])
  };
  var HEART = [".a.a.", "aaaaa", "aaaaa", ".aaa.", "..a.."];

  function draw(rows) {
    var w = rows[0].length + 2, h = rows.length + 2, rects = "";
    function at(x, y) { var c = (rows[y - 1] || "")[x - 1]; return c && c !== "." ? c : ""; }
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var c = at(x, y) || (at(x - 1, y) || at(x + 1, y) || at(x, y - 1) || at(x, y + 1) ? "o" : "");
        if (c) rects += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + COLORS[c] + '"/>';
      }
    }
    return '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + " " + h + '" shape-rendering="crispEdges">' + rects + "</svg>";
  }
  var svgs = {};
  for (var name in FRAMES) svgs[name] = draw(FRAMES[name]);
  var heartSvg = draw(HEART);

  var llama = document.createElement("button");
  llama.type = "button";
  llama.className = "llama";
  llama.setAttribute("aria-label", "Pet the llama");
  llama.innerHTML = '<span class="llama-body"><span class="llama-sprite"></span></span>';
  var sprite = llama.querySelector(".llama-sprite");
  band.appendChild(llama);

  var x = 0, dir = 1, state = "walk", until = 0, flip = 0, flipAt = 0, shown = "", bite = null;
  function room() { return Math.max(0, band.clientWidth - llama.offsetWidth); }
  function rand(min, max) { return min + Math.random() * (max - min); }

  function render() {
    var frame = "stand";
    if (state === "walk" || state === "run") frame = flip ? "step" : "stand";
    else if (state === "graze") frame = flip ? "chew" : "graze";
    else if (state === "sit") frame = "sit";
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
      bite.style.left = x + llama.offsetWidth * mouth(0.92) + "px";
      bite.style.animationDuration = seconds + "s, 1.5s";
      band.appendChild(bite);
      var done = bite;
      setTimeout(function () { done.remove(); }, (seconds + 11) * 1000);
    }
  }

  function decide(now) {
    if (state === "walk" && Math.random() < 0.65) return setState("graze", rand(2.5, 4.5), now);
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
    render();
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
      pop("llama-heart", heartSvg, mouth(0.64), 1.2);
    },
    function (now) {
      setState("idle", 1, now);
      pop("llama-spit", "", mouth(0.8), 0.7);
    },
    function (now) { setState("sit", 2.5, now); },
    function (now) { dir = -dir; setState("run", 1.6, now); }
  ];
  var petted = 0;
  llama.addEventListener("click", function () {
    if (still) return pop("llama-heart", heartSvg, mouth(0.64), 1.2);
    reactions[petted++ % reactions.length](performance.now());
  });

  x = room() * 0.7;
  render();
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
})();

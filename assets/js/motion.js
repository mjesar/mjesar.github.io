// Quiet entrance motion: page parts rise into place once as they scroll into view.
// The head script adds the "motion" class only when the visitor allows motion; without it
// (or without this script) every element is simply visible.
(function () {
  var root = document.documentElement;
  if (!root.classList.contains("motion")) return;
  window.motionReady = true;

  // Headings, paragraphs, lists and single cards move on their own; wrappers are opened up
  var items = [];
  function collect(el) {
    for (var i = 0; i < el.children.length; i++) {
      var child = el.children[i];
      var wrapper = child.matches("section, div.grid, article:not(.card), dl:not(.faq)");
      if (wrapper) collect(child); else items.push(child);
    }
  }
  var main = document.querySelector("main");
  if (!main) return;
  collect(main);

  items.forEach(function (el) { el.classList.add("reveal"); });

  // Elements arriving together cascade in order, 70ms apart
  var observer = new IntersectionObserver(function (entries) {
    var shown = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.style.transitionDelay = Math.min(shown, 5) * 70 + "ms";
      el.classList.add("is-in");
      observer.unobserve(el);
      // once in place, hand the element back to its own hover transitions
      el.addEventListener("transitionend", function done(event) {
        if (event.target !== el) return; // ignore transitions bubbling up from links inside
        el.removeEventListener("transitionend", done);
        el.classList.remove("reveal", "is-in");
        el.style.transitionDelay = "";
      });
      shown++;
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  items.forEach(function (el) { observer.observe(el); });
})();

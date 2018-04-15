/**
 * This script is embedded into the <head>
 * of all patternplate documents. It provides
 * toggle functionality that should run before
 * the main React application mounts on the
 * Server Side Rendered HTML document.
 *
 *
 */
var query = parseQueryString(window.location.search);
var SUPPORTED = supported();

var observer = new MutationObserver(function(mutations) {
  for (var i=0; i < mutations.length; i++){
    for (var j=0; j < mutations[i].addedNodes.length; j++){
      var node = mutations[i].addedNodes[j];

      if (node.nodeType !== 1) {
        continue;
      }

      if (matches(node, "[data-toggle-name]")) {
        // Force open all toggles if browser is unsupported
        if (!SUPPORTED) {
          node.setAttribute("data-toggle-enabled", true);
        }

        var name = node.getAttribute("data-toggle-name");
        node.setAttribute("data-toggle-enabled", query[name + "-enabled"]);
      }

      if (matches(node, "[data-browser-warning]")) {
        node.style.display = !SUPPORTED && query["browser-warning"] !== "false" ? "block" : "none";
      }
    }
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

if (SUPPORTED && query["js-warning"] !== "false") {
  window.addEventListener("error", function () {
    var el = document.querySelector("[data-js-warning]");
    el.style.display = "block";
  });
}

document.documentElement.addEventListener("click", function (e) {
  if (document.body.getAttribute("data-mounted")) {
    return;
  }

  var trigger = inside(e.target, "[data-trigger-name]");

  if (trigger) {
    e.preventDefault();
    var name = trigger.getAttribute("data-trigger-name");
    var q = JSON.parse(JSON.stringify(query));
    q[name + "-enabled"] = q[name + "-enabled"] === "true" ? "false" : "true";
    window.location.search = "?" + stringifyQuery(q);
    return;
  }

  var link = inside(e.target, "a");

  if (link) {
    var href = link.getAttribute("href");

    if (href.charAt(0) === "." || href.charAt(0) === "/") {
      var lq = parseQueryString(link.search);
      e.preventDefault();
      window.location.href = link.pathname + "?" + stringifyQuery(merge(lq, query));
    }
  }
});

function matches(node, selector) {
  if (typeof node.matches === "function") {
    return node.matches(selector);
  }

  return node.msMatchesSelector(selector);
}

function merge(o, p) {
  var r = {};
  for (var attrname in o) { r[attrname] = o[attrname] }
  for (var attrname in p) { r[attrname] = p[attrname] }
  return r;
}

function supported() {
  try {
    eval("async () => {}");
    return true;
  } catch (err) {
    return false;
  }
}

function stringifyQuery(map) {
  return Object.keys(map)
    .map(function(key) {
      return [key, map[key]].join("=")
    })
    .join("&");
}

function parseQueryString(search) {
  search = search.charAt(0) === "?" ? search.slice(1) : search;
  return search.split("&")
    .map(function(pair) {
      return pair.split("=");
    })
    .reduce(function(acc, entry) {
      if (entry[1] === "false" || entry[1] === "true") {
        acc[entry[0]] = entry[1] ;
      }
      return acc;
    }, {});
}

function inside(el, selector) {
  while (el) {
    if (el.nodeType === 1 && matches(el, selector)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}

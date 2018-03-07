
// lib/hello-world/demo.js
module.exports = {
  html: '<h1 class="hello-world" data-hello-world>Hello World</h1>',
  css: '.hello-world { font-family: sans-serif; color: cornflowerblue; cursor: pointer; }',
  default: function() {
    var el = document.querySelector("[data-hello-world]");
    var count = 0;
    el.addEventListener("click", function(e) {
      e.target.textContent = "Hello World, " + (++count);
    });
  }
};

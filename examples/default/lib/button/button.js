export default button;

function button(el) {
  el.addEventListener("click", function() {
    console.log("Button", el, "clicked");
  });
}

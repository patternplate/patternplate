import scrollparent from "scrollparent";

export default scrollTo;
export const type = "SCROLL_TO";

const NOOP = () => {};

function scrollTo(to) {
  const { document } = global;

  if (!document) {
    return NOOP;
  }

  const target = getTarget(to);

  if (!target) {
    return NOOP;
  }

  const parent = scrollparent(target);

  if (!parent) {
    return NOOP;
  }

  parent.scrollTop = target.offsetParent.offsetTop;

  return dispatch => {
    dispatch({
      type: "SCROLLED_TO",
      payload: to
    });
  };
}

function getTarget(to) {
  if (typeof to === "string") {
    return document.getElementById(to);
  }

  return to;
}

scrollTo.type = type;

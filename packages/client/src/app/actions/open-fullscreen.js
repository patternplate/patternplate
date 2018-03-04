import urlQuery from "../utils/url-query";
import { selectId, selectContentType } from "../selectors/item";

export default openFullscreen;
export const type = "OPEN_FULLSCREEN";

function openFullscreen() {
  return (dispatch, getState) => {
    if (!global.open) {
      return;
    }

    const state = getState();
    const contentType = selectContentType(state);

    if (contentType !== "pattern") {
      return;
    }

    const id = selectId(state);

    if (!id) {
      return;
    }

    const href = urlQuery.format({
      pathname: `${state.base}api/demo/${id}.html`
    });

    global.open(href, "_blank");
  };
}

openFullscreen.key = "";
openFullscreen.property = "";
openFullscreen.type = type;

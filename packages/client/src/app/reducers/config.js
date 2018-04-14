import {renderToString} from "react-dom/server";
import {merge} from "lodash";
import * as svg from "../utils/svg";

export default (state, action) => {
  let copy;

  switch (action.type) {
    case "LOAD_SCHEMA_SUCCESS": {
      copy = merge({}, action.payload.config);
      break;
    }
    default: {
      copy = merge({}, state);
    }
  }

  if (!copy.hasOwnProperty("ui")) {
    copy.ui = {};
  }

  const {ui} = copy;

  ui.renderedLogo = ui.hasOwnProperty("logo")
    ? renderToString(svg.render(svg.sanitize(svg.purge([svg.parse(ui.logo)]))[0]))
    : "";

  const favicon = ui.favicon || ui.logo;

  ui.renderedFavicon = global.document && favicon
    ? svg.png(favicon)
    : Promise.resolve("");

  return copy;
};

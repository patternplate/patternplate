import Url from "url";
import * as uuid from "uuid";
import {PluginHub} from "../plugin-hub";
import selectItem from "../selectors/item";

export default pluginCommand;
export const type = "PLUGIN_COMMAND";

function pluginCommand(payload) {
  return (dispatch, getState) => {
    const state = getState();
    const item = selectItem(state);
    const pattern = item.contentType === "pattern" ? item : {};

    const path = Url.resolve(state.base, 'api/');

    const hub = PluginHub.create({
      src: `ws://${window.location.host}${path}`
    });

    hub.send({
      id: uuid.v4(),
      state: { component: pattern.id },
      payload
    });
  };
}

pluginCommand.type = type;


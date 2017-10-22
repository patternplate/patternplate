import { patchLocation } from "./";

export default activateNode;
export const type = "ACTIVATE_NODE";

function activateNode(id) {
  return (dispatch, getState) => {
    dispatch(
      patchLocation({
        query: {
          "active-node": id
        }
      })
    );
  };
}

activateNode.key = "";
activateNode.property = "";
activateNode.type = type;

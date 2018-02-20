import handleDependentActions from "../actions/handle-dependent-actions";

export default handleDependentActions(
  {
    LISTEN_HEARTBEAT: (...args) => handle(...args),
    FETCHING: (...args) => handle(...args),
    ERROR_HEARTBEAT: () => "offline"
  },
  {
    defaultValue: "",
    dependencies: ["fetching"]
  }
);

function handle(state = "loading", action, { fetching }) {
  return fetching ? "loading" : "loaded";
}

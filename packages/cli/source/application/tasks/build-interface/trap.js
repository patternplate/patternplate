import boxen from "boxen";
import { uniq } from "lodash";

export default trap;

function trap(application) {
  const warnings = [];
  const warn = application.log.warn;
  const err = console.error;

  application.log.warn = (...args) => {
    if (args.some(arg => arg.includes("Deprecation"))) {
      warnings.push(args);
      return;
    }
    warn(...args);
  };
  console.error = (...args) => {
    warnings.push(args);
  };

  return function(cb) {
    console.error = err;
    application.log.warn = warn;

    const messages = uniq(warnings)
      .map(warning => warning.join(" "))
      .map(message => boxen(message, { borderColor: "yellow", padding: 1 }));

    cb(messages);
  };
}

const React = require("react");
const Link = require(".");

module.exports.default = function LinkDemo() {
  return (
    <React.Fragment>
      <div>
        <Link href="/">Standard link</Link>
      </div>
      <div>
        <Link href="/" external>External Link</Link>
      </div>
    </React.Fragment>
  );
};

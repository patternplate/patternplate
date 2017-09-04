const React = require('react');
const Button = require('Pattern');
const Themer = require('../demo-themer');

module.exports = function ButtonDemo() {
  return (
    <Themer>
      <div>
        <Button
          symbol="reload"
          title="Reload"
          type="link"
          href="/"
          external
          layout="no-border"
        >
          Link Button
    		</Button>
        <Button
          symbol="reload"
          title="Reload"
        >
          Button
    		</Button>
        <Button
          title="Reload"
          layout="no-border"
        >
          Button without icon
    		</Button>
        <Button
          symbol="patternplate"
          title="Patternplate"
        />
      </div>
    </Themer>
  );
}

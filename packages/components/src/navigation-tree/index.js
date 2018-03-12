const React = require("react");
const NavigationLabel = require("../navigation-label");
const NavigationItem = require("../navigation-item");
const Flag = require("../flag");

module.exports = NavigationTree;

function NavigationTree(props) {
  return (
    <div className={props.className}>
      {props.children}
      {(props.data || [])
        .filter(item => typeof item.manifest === "object")
        .map((item, index) => {
          // TODO: this should not have to deal with normalization
          const options = (item.manifest.options || {});
          const hidden = options.hidden || false;
          const icon = selectSymbol(item);
          const iconActive = selectActiveSymbol(item);
          const name = (item.manifest.name ? String(item.manifest.name) : '').toLowerCase();
          const enabled = (props.query || {})[`${name}-enabled`] === "true";

          switch (item.type) {
            case "folder":
              return (
                <React.Fragment key={item.id}>
                  <NavigationLabel
                    enabled={enabled}
                    name={name}
                    highlight={false}
                    >
                    {item.manifest.displayName || item.manifest.name}
                  </NavigationLabel>
                  {
                    (enabled &&
                      item.children.map((child, index) => {
                        return (
                          <NavigationItem
                            key={child.id}
                            active={child.active}
                            href={child.href}
                            id={child.id}
                            meta={(child.warnings || []).map(warning => (
                              <NavigationMeta key={warning.value} warning={warning} />
                            ))}
                            name={child.manifest.displayName}
                            onClick={props.onItemClick}
                            onScrollRequest={props.onScrollRequest}
                            prefix={props.prefix}
                            symbol={selectSymbol(child)}
                            symbolActive={selectActiveSymbol(child)}
                            type={child.type}
                            />
                        );
                    }))
                  }
                </React.Fragment>
              );
            case "item":
              return (
                <NavigationItem
                  key={item.id}
                  active={item.active}
                  hidden={hidden}
                  href={options.href || item.href}
                  external={Boolean(options.href)}
                  id={item.id}
                  meta={(item.warnings || []).map(warning => (
                    <NavigationMeta key={warning.value} warning={warning} />
                  ))}
                  name={item.manifest.displayName}
                  onClick={props.onItemClick}
                  onScrollRequest={props.onScrollRequest}
                  prefix={props.prefix}
                  symbol={icon}
                  symbolActive={iconActive}
                  type={item.type}
                  />
              );
          }
        })}
    </div>
  );
}

function NavigationMeta(props) {
  switch (props.warning.type) {
    case "flag":
    default:
      return <Flag title={props.warning.message}>{props.warning.value}</Flag>;
  }
}

function selectActiveSymbol(item) {
  if (item.type === "item") {
    return null;
  }

  if (item.manifest.options.iconActive) {
    return item.manifest.options.iconActive;
  }

  if (item.type === "folder") {
    return "arrow-down";
  }

  return null;
}

function selectSymbol(item) {
  if (item.type === "item") {
    return null;
  }

  if (item.manifest.options.icon) {
    return item.manifest.options.icon;
  }

  if (item.type === "folder") {
    return "arrow-right";
  }

  return null;
}

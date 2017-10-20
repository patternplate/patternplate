const React = require("react");
const NavigationItem = require("../navigation-item");
const Flag = require("../flag");

module.exports = NavigationTree;

function NavigationTree(props) {
  return (
    <div className={props.className}>
      {props.children}
      {(props.data || [])
        .filter(item => typeof item.manifest === "object")
        .map(item => {
          const hidden = (item.manifest.options || {}).hidden || false;
          const icon = selectSymbol(props, item);
          const iconActive = selectActiveSymbol(props, item);

          return (
            <NavigationItem
              key={item.id}
              active={item.active}
              hidden={hidden}
              href={item.href}
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
            >
              {item.type === "folder" && (
                <NavigationTree
                  active={props.active}
                  data={item.children}
                  id={item.id}
                  onClick={props.onItemClick}
                  onScrollRequest={props.onScrollRequest}
                  prefix={item.prefix}
                />
              )}
            </NavigationItem>
          );
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

function selectActiveSymbol(props, item) {
  if (item.type === "pattern") {
    return null;
  }

  if (item.manifest.options.iconActive) {
    return item.manifest.options.iconActive;
  }

  return item.type;
}

function selectSymbol(props, item) {
  if (item.type === "pattern") {
    return null;
  }

  if (item.manifest.options.icon) {
    return item.manifest.options.icon;
  }

  return item.type;
}

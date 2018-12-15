const React = require("react");
const MainNavigation = require(".");
const { NavigationToolbar } = require(".");
const Themer = require("../demo-themer");
const Button = require("@patternplate/component-button").Button;
const Logo = require("../logo");

const navigation = {
  children: [{}]
};

const docs = {
  children: [
    {
      active: false,
      type: "item",
      contentType: "doc",
      id: "item",
      href: "#link",
      manifest: {
        displayName: "Item"
      }
    },
    {
      active: true,
      type: "item",
      contentType: "doc",
      href: "#link",
      id: "item-active",
      manifest: {
        displayName: "Active Item"
      }
    },
    {
      type: "folder",
      contentType: "doc",
      id: "folder",
      href: "#link",
      manifest: {
        displayName: "Folder",
        options: {}
      }
    }
  ]
};

const MainNavigationDemo = (props) => {
  return (
    <MainNavigation
      docs={docs}
      navigation={navigation}
      applicationTitle="Patternplate"
      >
    <MainNavigation.NavigationHeader>
      <Logo source={props.logo}/>
    </MainNavigation.NavigationHeader>
    <NavigationToolbar>
      <ToolbarButton item="react" />
      <ToolbarButton item="search" />
      <ToolbarButton item="reload" />
    </NavigationToolbar>
  </MainNavigation>
  );
}

module.exports.MainNavigationDemo = MainNavigationDemo;

module.exports.default = () => {
  return (
    <Themer>
      <div style={{minWidth: 300}}>
        <MainNavigationDemo/>
      </div>
    </Themer>
  );
};



function ToolbarButton(props) {
  return <Button type="link" symbol={props.item} frameless transparent />;
}

const SearchComponent = require(".").default;
const Search = require(".");
const React = require("react");
const { Themer } = require("@patternplate/component-utility");
const SearchField = require("../search-field");

module.exports.default = () => (
  <Themer>
    <SearchComponent
      legend={{
        name: 'foo'
      }}
    >
      <Search.SearchFieldSlot>
        <SearchField />
      </Search.SearchFieldSlot>
      <Search.SearchResult
        name="bar"
        id="bar"
        type="molecule"
        icon="pattern"
      />
    </SearchComponent>
  </Themer>
);

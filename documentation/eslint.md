> < [Back](./readme.md) to Readme

# Setting up eslint

patternplate includes a custom resolve algorithm to make providing you with a browsable dependency graph for your components easier.

For eslint and related tools to work you need to install some additional
software.

## eslint

```
npm install --save-dev eslint \
  babel-eslint \
  eslint-plugin-patternplate \
  eslint-plugin-import \
  eslint-import-resolver-patternplate
```

In your package.json, add the following options to `eslintConfig`.

```json
{
  "eslintConfig": {
    "parser": "babel-eslint",
    "plugins": [
      "patternplate"
    ],
    "settings": {
      "import/resolver": {
        "node": {},
        "patternplate": {}
      }
    }
  }
}
```

## xo

```
npm install --save-dev xo \
  babel-eslint \
  eslint-plugin-patternplate \
  eslint-plugin-import \
  eslint-import-resolver-patternplate
```

```json
{
  "xo": {
    "parser": "babel-eslint",
    "plugins": [
      "patternplate"
    ],
    "settings": {
      "import/resolver": {
        "node": {},
        "patternplate": {}
      }
    },
    "space": true
  }
}
```

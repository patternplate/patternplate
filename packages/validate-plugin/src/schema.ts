export const schema = {
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "contributes": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "menus": {
          "type": "array",
          "items": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "anchor",
              "command",
              "title"
            ],
            "properties": {
              "anchor": {
                "type": "string",
                "enum": [
                  "sidebar",
                  "toolbar"
                ]
              },
              "command": {
                "type": "string"
              },
              "title": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "commands": {
      "patternProperties": {
        "^.*$": {
          "type": "object",
          "additionalProperties": true
        }
      }
    }
  }
};

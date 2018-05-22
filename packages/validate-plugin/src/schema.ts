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
              "handler",
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
              "handler": {},
              "title": {
                "type": "string"
              }
            }
          }
        },
        "routes": {
          "type": "array",
          "items": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "anchor",
              "handler",
              "path"
            ],
            "properties": {
              "anchor": {
                "type": "string",
                "enum": [
                  "api",
                  "client"
                ]
              },
              "path": {
                "type": "string"
              },
              "handler": {}
            }
          }
        }
      }
    }
  }
};

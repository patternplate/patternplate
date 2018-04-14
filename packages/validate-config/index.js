const validate = require("@webpack-contrib/schema-utils");

const schema = {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "render",
    "mount",
    "entry",
    "docs"
  ],
  "properties": {
    "docs": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "entry": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "mount": {
      "type": "string"
    },
    "render": {
      "type": "string"
    },
    "cover": {
      "type": "string",
      "examples": [
        "./cover.js"
      ]
    },
    "ui": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "logo": {
          "type": "string"
        },
        "favicon": {
          "type": "string"
        },
        "fontDefault": {
          "type": "string"
        },
        "fontHeadline": {
          "type": "string"
        },
        "fontCode": {
          "type": "string"
        },
        "colorActive": {
          "type": "string"
        },
        "colorError": {
          "type": "string"
        },
        "colorWarning": {
          "type": "string"
        },
        "colorInfo": {
          "type": "string"
        },
        "colorSuccess": {
          "type": "string"
        },
        "colorBackgroundDark": {
          "type": "string"
        },
        "colorBackgroundSecondaryDark": {
          "type": "string"
        },
        "colorBackgroundTertiaryDark": {
          "type": "string"
        },
        "colorBorderDark": {
          "type": "string"
        },
        "colorTextDark": {
          "type": "string"
        },
        "colorTextNegatedDark": {
          "type": "string"
        },
        "colorRecessDark": {
          "type": "string"
        },
        "colorBackgroundLight": {
          "type": "string"
        },
        "colorBackgroundSecondaryLight": {
          "type": "string"
        },
        "colorBackgroundTertiaryLight": {
          "type": "string"
        },
        "colorBorderLight": {
          "type": "string"
        },
        "colorTextLight": {
          "type": "string"
        },
        "colorTextNegatedLight": {
          "type": "string"
        },
        "colorRecessLight": {
          "type": "string"
        }
      }
    }
  }
}

module.exports.schema = schema;

module.exports.validate = ({ target, name }) => {
  try {
    validate({
      name,
      schema,
      target,
      log: false,
      exit: false,
      throw: true
    });
  } catch (err) {
    return [err, false];
  }

  return [null, true];
}

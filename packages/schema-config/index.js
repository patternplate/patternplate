module.exports = {
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
      "title": "docs glob patterns",
      "items": {
        "$id": "/properties/docs/items",
        "type": "string",
        "title": "docs glob pattern",
        "examples": [
          "*.md",
          "README.md",
          "docs/**/*.md"
        ]
      }
    },
    "entry": {
      "type": "array",
      "title": "entry glob patterns",
      "items": {
        "$id": "/properties/entry/items",
        "type": "string",
        "title": "entry glob pattern",
        "examples": [
          "**/*.demo.js",
          "demo.js"
        ]
      }
    },
    "mount": {
      "type": "string",
      "title": "Mount Method ID",
      "examples": [
        "./mount.js",
        "renderer/mount"
      ]
    },
    "render": {
      "type": "string",
      "title": "Render Method ID",
      "examples": [
        "./render.js",
        "renderer/render"
      ]
    },
    "cover": {
      "type": "string",
      "title": "cover ID",
      "examples": [
        "./cover.js"
      ]
    }
  }
}

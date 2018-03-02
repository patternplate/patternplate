import ARSON from "arson";
import assert from "assert";

const CODES = {
  "arrow-up": 38,
  "arrow-right": 39,
  "arrow-down": 40,
  "arrow-left": 37,
  esc: 27,
  space: 32,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  h: 72,
  i: 73,
  o: 79,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  r: 82,
  t: 84
};

export default class Shortcut {
  constructor({ action, character, description, modifiers }) {
    this.character = character;
    this.code = CODES[character];
    this.action = action;
    this.key = this.action.key;
    this.active = "document" in global;
    this.description = description;
    this.modifiers = modifiers || ["ctrlKey", "altKey"];
    this.bind = this.bind.bind(this);
  }

  bind(store) {
    if (!this.active) {
      return;
    }

    const onKeyPress = e => {
      if (!this.modifiers.every(m => e[m])) {
        return;
      }

      if (e.keyCode !== this.code) {
        return false;
      }

      store.dispatch(this.action());
    };

    global.addEventListener("message", e => {
      try {
        const message = ARSON.parse(e.data);
        if (message.type === "keydown") {
          onKeyPress(message.payload);
        }
      } catch (err) {

      }
    }, false);

    global.addEventListener("keydown", e => {
      const prevent = onKeyPress({
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        keyCode: (e.data || e).keyCode,
      });
      if (prevent) {
        e.preventDefault();
      }
    });
  }

  toString() {
    const keys = [...this.modifiers, this.character].map(c =>
      c.replace("Key", "")
    );
    return `[${keys.join("+")}]`;
  }
}

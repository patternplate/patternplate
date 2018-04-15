const ARSON = require("arson");
const url = require("url");
const fetch = require("isomorphic-fetch");
const platform = require("platform");
const router = require("./app/client").default;
const { merge } = require("lodash");

const { document } = global;

main().catch(err => {
  console.error(err);
});

async function main() {
  const slot = document.querySelector('[data-application-el="patternplate"]');
  const vault = document.querySelector('[data-application-state="patternplate"]');
  const data = await getData(vault);

  if (data.isStatic) {
    slot.innerHTML = '';
  }

  router(data, slot);

  document.body.setAttribute("data-mounted", true);
}

async function getData(vault) {
  const data = ARSON.parse(decodeURIComponent(vault.textContent));
  const schema = await getStateData(data.base);

  return merge(data, getPlatformData(), getWindowData(), {
    schema,
    navigation: schema.meta
  });
}

async function getStateData(base) {
  return (await fetch(`${prefix(base)}/api/state.json`, {credentials: "include"})).json();
}

function prefix(base) {
  return base.charAt(base.length - 1) === "/"
    ? base.slice(0, base.length - 1)
    : base;
}

function getPlatformData() {
  return {
    clientRuntimeName: platform.name,
    clientRuntimeVersion: platform.version,
    clientOsName: platform.os.name,
    clientOsVersion: platform.os.version
  };
}

function getWindowData() {
  return {
    window: {
      width: global.innerWidth,
      height: global.innerHeight
    }
  };
}

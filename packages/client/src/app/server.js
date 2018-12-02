import React from "react";
import { renderToString } from "react-dom/server";
import {
  createMemoryHistory,
  match,
  RouterContext
} from "@marionebl/react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { ServerStyleSheet } from "@patternplate/components";

import routes from "./routes";
import configureStore from "./store";
import selectItem from "./selectors/item";

export default function(location, data) {
  const sheet = new ServerStyleSheet();
  const memoryHistory = createMemoryHistory(location);
  const store = configureStore(memoryHistory, data);
  const history = syncHistoryWithStore(memoryHistory, store);

  return new Promise((resolve, reject) => {
    match(
      {
        history,
        routes: routes(store),
        location
      },
      (error, redirect, props) => {
        if (error) {
          return reject(error);
        }
        const context = sheet.collectStyles(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        );

        const state = store.getState();
        const item = selectItem(state);

        const html = renderToString(context);
        const css = sheet.getStyleElement();
        resolve({ html, css, status: typeof item !== 'undefined' ? 200 : 404 });
      }
    );
  });
}

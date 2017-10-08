require("isomorphic-fetch");
import "react-hot-loader/patch";
import React from "react";

import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import configureStore from "front/store";
import createHistory from "history/createBrowserHistory";

import RoutesDefinition from "front/routing/routes";

import Cookies from "h/cookies";
import Services from "front/services";

const config = JSON.parse(document.getElementById("config").innerHTML);

const history = createHistory();

let session = Cookies.get("session");
if (session) {
  session = JSON.parse(session);
} else {
  session = null;
}
Services.setup(config.apiEndpoint, session ? session.token : null);

const storeState = {
  session: {
    session
  }
};

const store = configureStore(storeState, history);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RoutesDefinition/>
      </ConnectedRouter>
    </Provider>
  </AppContainer>, document.getElementById("main"));

if (module.hot) {
  module.hot.accept("front/routing/routes", () => {
    const Routes = require("front/routing/routes").default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes/>
          </ConnectedRouter>
        </Provider>
      </AppContainer>, document.getElementById("main"));
  });
}

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

const history = createHistory();

const store = configureStore({}, history);

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

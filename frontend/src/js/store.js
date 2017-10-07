import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import reducers from "front/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";

const loggerMiddleware = createLogger({collapsed: true});

let store;

export default function configureStore(preloadedState, history) {
  if (store) {
    return store;
  }

  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(loggerMiddleware);
  }

  if (history) {
    middlewares.push(routerMiddleware(history));
  }

  store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("./reducers/index", () => {
      const reducers2 = require("./reducers/index").default;
      store.replaceReducer(reducers2);
    });
  }

  return store;
}

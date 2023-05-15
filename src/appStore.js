import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducers";
import { createLogicMiddleware } from "redux-logic";
import axios from "axios";
import rootLogic from "./redux/logic";
import { composeWithDevTools } from "redux-devtools-extension";

//optional injected dependencies for logic // anything like api keys and such things that you might need in the logic
const deps = {
  httpClient: axios, //dont know why this is being used as http client
};

//create middleware
const logicMiddleware = createLogicMiddleware(rootLogic, deps);

const composedMiddleware = compose(
  composeWithDevTools(applyMiddleware(logicMiddleware))
);

export default createStore(rootReducer, composedMiddleware);

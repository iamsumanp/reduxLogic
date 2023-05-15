import * as types from "../typevariables/types";

import { createLogic } from "redux-logic";
import axios from "axios";
const getJsonData = createLogic({
  type: types.FETCH_10_USER,
  // latest: true, // only provide the latest response if fired many times //commented for now
  processOptions: {
    dispatchReturn: true,
    successType: types.FETCH_10_USER_SUCCESSFULL,
  },

  warnTimeout: 0,
  process({ action }) {
    // console.log(action.type);
    console.log("started process with action types" + action.type);
    console.log("started process with action types" + action.payload);

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((resp) => resp.data)
    //   .then((userData) =>
    //     dispatch({
    //       type: types.FETCH_10_USER_SUCCESSFULL,
    //       payload: userData,
    //     })
    //   );

    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.data);
  },
});

export default [getJsonData];

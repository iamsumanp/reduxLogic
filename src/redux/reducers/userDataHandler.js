import * as types from "../typevariables/types";

const initialState = {
  isFetching: false,
  userData: null,
  postData: null,
  todoData: null,
};

const userDataHandling = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_10_USER:
      return {
        ...state,
        isFetching: true,
        userData: action.payload,
      };

    case types.FETCH_10_USER_SUCCESSFULL:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
      };

    case types.FETCH_100_POSTS:
      return {
        ...state,
        isFetching: false,
        postData: action.payload,
      };

    case types.FETCH_200_TODOS:
      return {
        ...state,
        isFetching: false,
        todoData: action.payload,
      };

    default:
      return state;
  }
};
export default userDataHandling;

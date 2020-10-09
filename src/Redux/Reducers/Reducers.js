import * as types from "../Actions/actiontypes";

const Reducers = (state = {}, action) => {
  switch (action.type) {
    case types.BLOGLIST:
      return Object.assign({}, state, {
        blogList: action.blogList
      });
    case types.BLOGDETAILS:
      return Object.assign({}, state, {
        blogData: action.blogData
      });
    default:
      return state;
  }
};

export default Reducers;

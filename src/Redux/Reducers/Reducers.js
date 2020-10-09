import * as types from "../Actions/actiontypes";

const Reducers = (state = {loader:false}, action) => {
  switch (action.type) {
    case types.BLOGLIST:
      return Object.assign({}, state, {
        blogList: action.blogList
      });
    case types.BLOGDETAILS:
      return Object.assign({}, state, {
        blogData: action.blogData
      });
      case types.LOADER:
        return Object.assign({}, state, {
          loader: !state.loader
        });
    default:
      return state;
  }
};

export default Reducers;

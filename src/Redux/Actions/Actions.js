import * as types from "./actiontypes";
const contentful  = require('contentful');
const client = contentful.createClient({
  space: '6e53lvm4k39v',
  accessToken: 'HlFVjWfLzb3sKSR1GuQ5EsMl9FT8f61scYI_ZykNXsY'
})


//Add any dispatches that send data to a reducer below
export const setAllBlogList = (data) => ({
  type: types.BLOGLIST,
  blogList:data
});
export const setLoader = () => ({
  type: types.LOADER,

});
export const setBlogDetails = (data) => ({
  type: types.BLOGDETAILS,
  blogData:data
});
export const dispatchGetAllBlogList = () => {
  return function(dispatch, getState) {
    dispatch(setLoader())
    client.getEntries({ content_type: 'blogs' }).then((data)=>{
        dispatch(setAllBlogList(data.items));
        dispatch(setLoader())
    }).catch((error)=>{
      dispatch(setLoader());
      console.log(error)}
      );
  };
}

export const dispatchGetBlogDetails = (id) => {
  
  return function(dispatch, getState) {
    dispatch(setLoader())

    client.getEntry(`${id}`)
  .then((data) => {
    dispatch(setBlogDetails(data.fields));
    dispatch(setLoader())

  }).catch((error)=>{
    dispatch(setLoader())
    console.log(error);
  })

  };
}
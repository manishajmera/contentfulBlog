import React,{useEffect} from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { connect  } from "react-redux";
import { Link } from "react-router-dom";
import "./ArticleList.css";
import Loader from '../Loader/Loader';


import {
    dispatchGetAllBlogList
} from "../../Redux/Actions/Actions";

function ArticleList({blogList,dispatchGetAllBlogList,loader}) {
    useEffect(() => {
        dispatchGetAllBlogList();
    }, [dispatchGetAllBlogList])
    return (
        <div className="container">
        <Link to="/post-publish-form" className="btn btn-primary publishbtn">Publish a Post</Link>
        { loader ? <Loader /> : blogList ? 
            blogList.map((item,index)=> <ArticleCard {...item.fields } key={item.sys.id} sys={item.sys}  />) : null}
       </div>
    )
}

function mapStateToProps(state) {
    return {
      blogList: state.blogList,
      loader:state.loader
    };
  }
  
  const mapDispatchToProps = {
        dispatchGetAllBlogList,

  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
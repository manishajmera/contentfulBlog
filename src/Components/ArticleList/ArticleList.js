import React,{useEffect} from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { connect  } from "react-redux";
import { Link } from "react-router-dom";
import "./ArticleList.css";

import {
    dispatchGetAllBlogList
} from "../../Redux/Actions/Actions";

function ArticleList({blogList,dispatchGetAllBlogList}) {
    useEffect(() => {
        dispatchGetAllBlogList();
    }, [dispatchGetAllBlogList])
    return (
        <div className="container">
        <Link to="/post-publish-form" className="btn btn-primary publishbtn">Publish a Post</Link>
        {blogList ? 
            blogList.map((item,index)=> <ArticleCard {...item.fields } key={item.sys.id} sys={item.sys}  />) : null}
       </div>
    )
}

function mapStateToProps(state) {
    return {
      blogList: state.blogList,
    };
  }
  
  const mapDispatchToProps = {
        dispatchGetAllBlogList,

  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
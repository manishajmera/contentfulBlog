import React,{useEffect} from 'react';
import ImageWithHeader from '../ImageWithHeader/ImageWithHeader';
import "./ArticleDetail.css";
import { connect  } from "react-redux";
import {
    dispatchGetBlogDetails
} from "../../Redux/Actions/Actions";
import { useParams } from "react-router-dom";
function ArticleDetail({dispatchGetBlogDetails,blogData}) {
    let { id } = useParams();
    useEffect(() => {
        dispatchGetBlogDetails(id);
    },[dispatchGetBlogDetails,id]);
    return (
        blogData ? <>
        <ImageWithHeader title={blogData.title} />  
        <div className="container">
          <div className="row page-desc">
             {blogData.description}
          </div>
        </div>
        </> : <div className="text-al">Page Not found</div>
    )
}
function mapStateToProps(state) {
    return {
    blogData: state.blogData,
    };
  }
  
  const mapDispatchToProps = {
    dispatchGetBlogDetails,

  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

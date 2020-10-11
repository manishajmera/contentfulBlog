import React from 'react';
import "./PublishFormBlog.css";
// const contentful = require('contentful-management')

// const client = contentful.createClient({
//   accessToken: '<content_management_api_key>'
// })
import { connect  } from "react-redux";
import {
    dispatchPostBlog
} from "../../Redux/Actions/Actions";
import Loader from '../Loader/Loader';

function PublishFormBlog({dispatchPostBlog,loader}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: {
              'en-US': event.target[0].value
            },
            description : {
              'en-US': event.target[1].value
            },
            summary : {
              'en-US': event.target[2].value
            },
            date:{
              'en-US':new Date()
            }
          }
          dispatchPostBlog(data)
    }
    return (
        loader ? <Loader /> : 
        <div className="container">
        <form className="form-class" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title  " required/>
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <textarea className="form-control" rows="5" id="summary" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows="5" id="description" required></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
        </form>
       </div>
    )
}

function mapStateToProps(state) {
    return {
        loader:state.loader
      };
  }
  
  const mapDispatchToProps = {
    dispatchPostBlog,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PublishFormBlog);

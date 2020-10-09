import React from 'react';
import "./PublishFormBlog.css";
// const contentful = require('contentful-management')

// const client = contentful.createClient({
//   accessToken: '<content_management_api_key>'
// })




export default function PublishFormBlog() {
    const handleSubmit = (event) => {
        event.preventDefault();
        //api dispatch function should come here
    //     client.getSpace('<space_id>')
    //         .then((space) => space.getEnvironment('<environment_id>'))
    //         .then((environment) => environment.createEntry('<content_type_id>', {
    //         fields: {
    //             title: {
    //             'en-US': 'Entry title'
    //             }
    //         }
    //     }))
    // .then((entry) => console.log(entry))
    // .catch(console.error)
        // window.location.href = window.location.origin;
        // console.log(event.target[1].value);
    }
    return (
        <div className="container">
        <form className="form-class" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title  " />
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <textarea className="form-control" rows="5" id="summary"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows="5" id="description"></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
        </form>
       </div>
    )
}

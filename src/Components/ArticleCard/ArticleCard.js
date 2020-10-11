import React from 'react';
import { Link } from "react-router-dom";
import "./ArticleCard.css";
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export default function ArticleCard({title,summary,slug,date,img,...props}) {
    let convertedDate = new Date(date);
    return (
        <div className="row card" key={props.sys.id}>
            <div className="col col-sm-6 col-xs-12 no-float">
                <h2>{title}</h2>
                <p>{summary}<Link to={props.sys.id} style={{color:"#26af26"}}> Read More</Link></p>
                <span className="date">{`${monthNames[convertedDate.getMonth()]} ${convertedDate.getDate()},${convertedDate.getFullYear()}`}</span>
            </div>
            <div className="col col-sm-6 col-xs-12 no-float align">
                <img src={window.location.origin + "/default-image.jpg"} alt="dummy" height="240px" width="400px"/>
            </div>
        </div>
    )
}





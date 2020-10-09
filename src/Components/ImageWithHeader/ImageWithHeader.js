import React from 'react';
import "./imageWithHeader.css";

export default function ImageWithHeader({title}) {
    return (
        <div className="paddingCls">
            <div className="bkgImg" style={{backgroundImage: `url(${window.location.origin}/default-image.jpg)`}}>
                <h2 className="caption">{title}</h2>
            </div>
        </div>
    )
}

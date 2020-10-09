import React from 'react';
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={`${window.location.origin}/logo.png`} alt="dummy" height="40px" width="80px"/> 
        </header>
    )
}

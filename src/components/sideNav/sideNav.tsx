import * as React from 'react';
import './nav.css';

export const SideNav = (props) => {

    const menuItems = [];
    return (
        <nav className={`side-drawer ${props.open?'open':''}`}>
            <h3 className="title">Mitto Pal</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact</a></li>           
                <li><a href="/">Youtube Channel</a></li>
                <li><a href="/">Blogs</a></li>
            </ul>
        </nav>
    )
}

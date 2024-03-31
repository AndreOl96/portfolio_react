import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <p>© 2024 Andre Oliveira. All rights reserved.</p>
        
            <nav className="menu">
                {/* Menu */}
                <ul className='nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projetos">Works</a></li>
                    <li><a href="/contact">Contacts</a></li>
                </ul>
            </nav>
        </div>
    );
}
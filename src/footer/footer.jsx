import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <p>© 2024 Andre Oliveira. Todos os direitos reservados.</p>
        
            <nav className="menu">
                {/* Menu */}
                <ul className='nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">About</a></li>
                    <li><a href="/contato">Works</a></li>
                    <li><a href="/contato">Contacts</a></li>
                </ul>
            </nav>
        </div>
    );
}
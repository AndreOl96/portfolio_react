import React from 'react';
import './header.css';

// Componente de cabeçalho
class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div >
          {/* Logotipo */}
          <h2>André Oliveira</h2>
        </div>
        <nav className="menu">
          {/* Menu */}
          <ul className='nav'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projetos">Works</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

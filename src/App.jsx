import React from 'react';
import './App.css';
import Home from './containerHome/conteinerHome.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import Grid from './grid/grid.jsx';
import Contact from './contact/contact.jsx';
import About from './about/about.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContainerHome from './containerHome/conteinerHome.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        

          <Routes>
            <Route path="/" element={<ContainerHome />} />
            <Route path="/projetos" element={<Grid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
          {/* Outros componentes e conteúdo do aplicativo aqui */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

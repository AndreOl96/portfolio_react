import React from 'react'
import './App.css'
import Home from './home/home.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Renderize o cabeçalho */}
        <Home />
        {/* Outros componentes e conteúdo do aplicativo aqui */}
      </div>
    );
  }}

export default App

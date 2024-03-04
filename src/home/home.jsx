import React from "react";
import Header from "../header/header.jsx";
import "./home.css";
import Grid from "../grid/grid.jsx";


const Home = () => {
    return (
        <div className="header-container">
        {/* Renderize o cabeçalho */}
        <Header />
        <Grid />
      </div>
)}
  export default Home; 
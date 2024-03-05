import React from "react";
import Header from "../header/header.jsx";
import "./home.css";
import Grid from "../grid/grid.jsx";
import Footer from "../footer/footer.jsx";


const Home = () => {
    return (
        <div className="header-container">
        {/* Renderize o cabeçalho */}
        <Header />
        <Grid />
        <Footer />
      </div>
)}
  export default Home; 
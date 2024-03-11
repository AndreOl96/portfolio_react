import React from "react";
import "./conteinerHome.css";

export default function ContainerHome() {
    return (
        <div className="main-container">
            <div className="sub-container"> <p></p>

            <div className="parts-container">
            <div className="card-home">
                <div><img className="card-img-home" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" /></div>
            <div> <p>Nome 1</p>
            <h3>André Olveira</h3>
            <p>Some quick example text to build</p></div>
           
            </div>
            </div>
            <div className="parts-container">
                <div className="card-home" ><p>linha 1</p></div>
                <div>
                <div className="card-home" > <p>Nome 1</p>
            <h3>André Olveira</h3>
            <p>Some quick example text to build</p></div>
            <div className="card-home"> <p>Nome 1</p>
            <h3>André Olveira</h3>
            <p>Some quick example text to build</p></div>
      
                </div>
            
            </div>
            
            
            
            </div>
            <div className="sub-container"><p>linha 2</p></div>
            <div className="sub-container"><p>linha 3</p></div>
               
            </div>
    );
}



import React from "react";
import "./conteinerHome.css";

export default function ContainerHome() {
    return (

        <div className="main-container">
<div className="sub-container 1">
    <div className="parts-container">
        <img className="card-img-home" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" />
        <h3>André Olveira</h3>
        <p>BOX 1</p>
        <button className="card-button"> Contact Me </button>
    </div>
    <div className="parts-container">
    <img className="card-img-home img-rectangle" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" />
        <p>BOX 2</p></div>
    <div className="parts-container">
    <img className="card-img-home" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" />
        <p>BOX 3</p></div>
</div>
<div className="sub-container 2">
    <div className="parts-container"><p>BOX 1</p></div>
    <div className="parts-container"><p>BOX 2</p></div>
    <div className="parts-container"><p>BOX 3</p></div>
</div>
<div className="sub-container 3">
    <div className="parts-container"><p>BOX 1</p></div>
    <div className="parts-container"><p>BOX 2</p></div>
    <div className="parts-container"><p>BOX 3</p></div>
</div>


        </div>

        // <div className="main-container">
        //     <div className="sub-container"> <p></p>

        //     <div className="parts-container">
        //     <div className="card-home">
        //         <div><img className="card-img-home" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" /></div>
        //     <div> <p>Nome 1</p>
        //     <h3>André Olveira</h3>
        //     <p>Some quick example text to build</p></div>
           
        //     </div>
        //     </div>
            
        //         <div className="card-home square-box" ><p>MORE ABOUT ME</p>
        //         <img className="card-img-home" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" />
        //         </div>
        //         <div>
        //         <div className="card-home square-box" > 
        //         <p>Nome 1</p>
        //     <p>Some quick example text to build</p></div>
       
      
        //         </div>
            
            
            
            
        //     </div>
               
        //     </div>
    );
}



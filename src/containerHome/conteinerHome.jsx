import React from "react";
import "./conteinerHome.css";

export default function ContainerHome() {
    return (

        <div className="main-container">
<div className="sub-container 1">
    <div className="parts-container conteiner-row">
        <img className="card-img-home" src="src/assets/1602706387191.jpeg" alt="Nome da imagem" />
       <div className="card-home">
       <span>Web Developer</span>
        <h3>André Olveira</h3>
        <p>Jovem muito bem conhecido por ser um desenvolvedor web, porém gosta de programar.</p>
        <button className="card-button"> 
       Let's Talk
     </button>
       </div>
        
    </div>
    <div className="parts-container">
    <img className=" svgSmall" src="/src/assets/educationSVG.svg" alt="Nome da imagem" />
    <div className="conteiner-row insideCard">
        <div><span>More About Me</span>
        <p>Education</p></div>
        <button className="card-button"> 
        Let's go
     </button>
      
     </div>
    </div>
       
    <div className="parts-container">
    <img className="svgSmall2" src="src/assets/portofolioSVG.svg" alt="Nome da imagem" />
    <div className="conteiner-row insideCard">
        <div><span>SHOWCASE</span>    
        <p>Portfolio</p></div>
        <button className="card-button"> 
       Let's go
     </button>
      
     </div>
    </div>

</div>
<div className="sub-container 2">
    <div className="parts-container2">
        <div className="icons">
    <img className=" iconSmall" src="/src/assets/html5.webp" alt="Nome da imagem" />
    <img className=" iconSmall" src="/src/assets/css.webp" alt="Nome da imagem" />
    <img className=" iconSmall" src="/src/assets/js.png" alt="Nome da imagem" />
    <img className=" iconSmall" src="/src/assets/react.png" alt="Nome da imagem" />
    <img className=" iconSmall" src="/src/assets/typescript.png" alt="Nome da imagem" />
    <img className=" iconSmall" src="/src/assets/node.png" alt="Nome da imagem" />
    </div>
    <div className="conteiner-row insideCard">
        <div><span>SPECIALIZATION</span>
        <p>Services Offering</p></div>
        <button className="card-button"> 
        Let's go
     </button>
      
     </div>
    </div>
    <div className="parts-container2">
        <div className="icons">
            <a href="https://www.linkedin.com/in/andr%C3%A9-oliveira-040496/">
    <img className=" iconSmall"  src="/src/assets/linkedin.webp" alt="Nome da imagem" />
    </a>
    <a href="https://github.com/AndreOl96">
    <img className=" iconSmall"  src="/src/assets/github.png" alt="Nome da imagem" />
    </a>
    <a href="https://www.behance.net/andreoliveira18">
    <img className=" iconSmall"  src="/src/assets/behance.png" alt="Nome da imagem" />
    </a>    </div>
    <div className="conteiner-row insideCard">
        <div><span>STAY WITH ME</span>
        <p>Social</p></div>
        <button className="card-button"> 
        Let's go
     </button>
      
     </div>
    </div>
    <div className="parts-container">
    <img className="svgSmall3" src="src/assets/work.svg" alt="Nome da imagem" />
    <div className="conteiner-row insideCard">
       
        <button className="card-button"> 
       Let's work togher !
     </button>
      
     </div>
    </div>
</div>
        </div>

    );
}



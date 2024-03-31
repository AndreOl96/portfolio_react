// import React from "react";
// import "./grid.css";
// import Card from "../card/card.jsx";    

// export default function Grid() {
//     return (
//         <div className="grid">
//             <div className="grid-item"> 
//             <Card 
//             imgSrc={"src/assets/1602706387191.jpeg"}
//             title={"Card 1"}
//             text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
//             buttonLink={"#"}
//             />
//             </div>
//             <div className="grid-item">
//             <Card
//             imgSrc={"https://picsum.photos/200"}
//             title={"Card 2"}
//             text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
//             buttonLink={"#"}
//             />
//             </div>
//             <div className="grid-item">
//             <Card
//             imgSrc={"https://picsum.photos/200"}
//             title={"Card 3"}
//             text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
//             buttonLink={"#"}
//             />
//             </div>

//             <div className="grid-item">
//             <Card
//             imgSrc={"https://picsum.photos/200"}
//             title={"Card 3"}
//             text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
//             buttonLink={"#"}
//             />
//             </div>

//             <div className="grid-item">
//             <Card
//             imgSrc={"https://picsum.photos/200"}
//             title={"Card 3"}
//             text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
//             buttonLink={"#"}
//             />
//             </div>

//             <div className="grid-item">
//             <Card
//             imgSrc={"https://picsum.photos/200"}
//             title={"Card 3"}
//             text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
//             buttonLink={"#"}
//             />
//             </div>

//         </div>
//     );
// }

import React from 'react';
import Card from '../card/card.jsx';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h1>Meu Portfólio</h1>
      <Card />
    </div>
  );
};

export default PortfolioPage;
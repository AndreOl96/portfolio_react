import React from "react";
import "./card.css";

export default function Card({
    imgSrc,
    title,
    text,
    buttonLink}
) {
    return (
        <div className="card">
            <img className="card-img" src={imgSrc}  alt="Nome da imagem" />
            <h2>{title}</h2>
            <p className="card-text">{text}</p>
            <a className="card-button" href={buttonLink}>Find out more &#8594;</a>

        </div>
    );
}

import React, { useState, useEffect } from 'react';
import styles from './card.module.css';

const Card = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('src/card/portfolioData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(error => console.error('Erro ao carregar dados do JSON:', error));
  }, []);

  return (
    <div className= {styles.cardContainer} >
      {projects.map(project => (
        <div className={styles.card} key={project.id}>
          <h3>{project.title}</h3>
          <img className='portfolio-img' src={project.image} alt={project.title} />
          <p>{project.description}</p>

          {/* Outras informações do projeto aqui */}
        </div>
      ))}
    </div>
  );
};

export default Card;
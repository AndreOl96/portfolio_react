import React from 'react';
import './about.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h3> About Me </h3>
        <div className="about-container">
        <p>Hello, I'm Andre Oliveira and I'm a designer passionate about creating beautiful visual experiences. Recently, I embarked on the exciting journey of fullstack development to expand my skills and create even more amazing projects.</p>
      <p>With a strong background in design and growing experience in web development, I'm seeking opportunities to collaborate on challenging and innovative projects that allow me to continue learning and growing professionally.</p>
      <p>I'm always open to new ideas, collaborations, and opportunities, so feel free to get in touch with me if you want to discuss a project or just say hello!</p>
      <p>In addition to design and development, I'm also passionate about photography and visual experiences, but what I enjoy most is programming. In my free time, you can find me taking long walks in nature, listening to music, or most likely riding a motorcycle.</p>
      </div>

      <div className='about-experience'>
        <br />
      <h3>Experience</h3>

      <h4>MIVERVA - ARTES GRÁFICAS - 2022 - Present</h4>
      <p>Design lead in the graphic design field, being responsible for teams and their coordination.</p>

      <h4>NEVERMIND - 2021 - 2022 - 1 Year 3 Months</h4>
      <p>Responsible for design, marketing and web in the area of children's furniture carpentry.</p>

      <h4>REMAX VIRTUAL TOUR PREMIER - 2020 - 2021 - 5 Months</h4>
      <p>Make fantastic video and photo edits of houses. </p>

      <h4>3DECIDE - 2019 - 2019 - 6 Months</h4>
      <p>I was involved in a project on Virtual Reality and 3D area.</p>
      <br />

      <h3>Education</h3>

      <h4>EDIT. - Disruptive Digital Education 2023 - 2024</h4>
      <p>Full Stack Development</p>

      <h4>Universidade da Maia - ISMAI 2016 - 2019</h4>
      <p>Bachelor's degree, Multimedia Communication Techologies</p>
     

      </div>

    </div>
  );
};

export default AboutPage;
import React from 'react';
import Form from '../form/form.jsx';
import './contact.css';

const ContactPage = () => {
  const handleSubmit = (formData) => {
    // Aqui você pode fazer algo com os dados do formulário, como enviar para um servidor
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className='contact-page'>
        <h3>Contacts</h3>
       <div className='cactact-container'>
        <div className='contacts-normal'>
            <div>
            <h4>Email</h4>
            <p>andre.ba.ol.96@gmail.com</p>
            <h4>Phone</h4>
            <p>+351 918 586 732</p>
            <h4>Location</h4>
            <p>Portugal - Porto</p>
            </div>
            <div className='catact-icons'>
            <a href="https://www.linkedin.com/in/andr%C3%A9-oliveira-040496/">
    <img className=" iconSmall"  src="/src/assets/linkedin.webp" alt="Nome da imagem" />
    </a>          
    <a href="https://github.com/AndreOl96">
    <img className=" iconSmall"  src="/src/assets/github.png" alt="Nome da imagem" />
    </a>
    <a href="https://www.behance.net/andreoliveira18">
    <img className=" iconSmall"  src="/src/assets/behance.png" alt="Nome da imagem" />
    </a>
            </div>
        </div>
        <div><Form onSubmit={handleSubmit} /></div>
        </div>
    </div>
  );
};

export default ContactPage;
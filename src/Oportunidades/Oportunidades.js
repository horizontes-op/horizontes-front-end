import React from 'react';
import './Oportunidades.css'; // Importando o arquivo de estilo CSS
import Logo from "../images/logo.jpeg";

const Oportunidades = (props) => {
    return (
        <div className='container_card_card'>
            <div className='container_header'>
                <a href='/'><img src={Logo} alt="Logo" className="logo" /></a> 
                <h2>Match de oportunidades</h2>
            </div>
           
             <div className='container_card'>
               
            {props.oportunidades.map((e, index) => (
                <div key={index} className='card'>
                    <h2>{e.nome}</h2>
                    <p><strong>Modalidade:</strong> {e.modalidade}</p>
                    <p><strong>Missão:</strong> {e.missao}</p>
                    <p><strong>Visão:</strong> {e.visao}</p>
                    <p><strong> Instagram:</strong> {e.perfil_instagram} </p>
                </div>
            ))}
        </div>

        </div>
       
    )
}

export default Oportunidades;

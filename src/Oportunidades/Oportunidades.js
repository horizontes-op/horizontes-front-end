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
                    <h2>{e.Nome}</h2>
                    <p><strong>Modalidade:</strong> {e.Modalidade}</p>
                    <p><strong>Missão:</strong> {e.Missao}</p>
                    <p><strong>Visão:</strong> {e.Visao}</p>
                    <p><strong> Descricão:</strong> {e.Descricao} </p>
                    <p><strong>Área de atuação:</strong> {e.AreaAtuacao}</p>
                    <p><strong>Redes sociais:</strong> {e.RedesSociais}</p>
                    <p><strong>Contato:</strong> <a target='_blank' href="{e.ContatoSite}">{e.ContatoSite}</a></p>

                </div>
            ))}
        </div>

        </div>
       
    )
}

export default Oportunidades;

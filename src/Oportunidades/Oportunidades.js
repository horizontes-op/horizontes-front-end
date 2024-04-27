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
                    <h2>{e.Nome == undefined ? e.InstituicaoNome : e.Nome}</h2>
              
                    <p style={{justifyContent:"justify"}}><strong style={{color:"rgba(249, 115, 22, 0.6)"}}>Missão:</strong> {e.Missao}</p>
                    <p><strong style={{color:"rgba(249, 115, 22, 0.6)"}}>Visão:</strong> {e.Visao}</p>
                    <p><strong style={{color:"rgba(249, 115, 22, 0.6)"}}> Descricão:</strong> {e.Descricao} </p>
                    <p><strong style={{color:"rgba(249, 115, 22, 0.6)"}}>Área de atuação:</strong> {e.AreaAtuacao}</p>
                    <p><strong style={{color:"rgba(249, 115, 22, 0.6)"}}>Redes sociais:</strong> {e.RedesSociais}</p>
                    <p><strong style={{color:"rgba(249, 115, 22, 0.6)"}}>Saiba mais:</strong> <a style={{color:"black", textDecoration:"solid"}} target='_blank' href={"https://" + e.ContatoSite}>{e.ContatoSite}</a></p>

                </div>
            ))}
        </div>

        </div>
       
    )
}

export default Oportunidades;

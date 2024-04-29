import React from 'react';
import './Oportunidades.css'; // Importando o arquivo de estilo CSS
import Logo from "../images/logo-horizontes.PNG";
import LoadingSpinner from '../components/LoadingSpinner';
import Estrelinhas from '../components/Estrelinhas';
import host from "../constantes"
import {useState} from 'react'
const Oportunidades = (props) => {
    console.log('Oportunidades:', props.matches);
    const [feedback, setFeedback] = useState(''); // Estado para armazenar o feedback do usuário
    const [estrelas, setEstrelas] = useState(0);
    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        console.log('Feedback:', feedback);
        console.log('Avaliação:', estrelas);
        console.log('ID do usuário:', props.id_usuario);
        // Envia o feedback e a avaliação para o servidor
        fetch( 'http://3.140.128.237:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id_usuario": props.id_usuario,
                "comentario": feedback,
                "qtd_estrelas": estrelas
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Feedback enviado com sucesso! Obrigado pela sua contribuição.');
        })
        .catch(error => {
            console.error('Ocorreu um erro ao enviar o feedback:', error);
            alert('Ocorreu um erro ao enviar o feedback. Por favor, tente novamente.');
        });
    }

    return (
        <div className='container-oportunidades' >
             
            (

                <div className='container-oportunidades-intro'>
                    <div className='container_header'>
                        <div className='container-header-img'> 
                            <a onClick={e => {
                                e.preventDefault();
                                window.location.href = "/";
                             }} href='/'><img src={Logo} alt="Logo" className="logo" /></a>
                        </div>
                        <div className='container-header-p'>
                            <p>Estas são as melhores oportunidades para o seu perfil!</p>
                        </div>
             
                    </div>
                
                    <div className='container_cards'>
                    {/* {JSON.stringify(props.matches)} */}
                    {props.matches.map((e, index) => (
                        <div key={index} className='card'>
                            <h2>{e.nome == undefined ? e.InstituicaoNome : e.nome}</h2>
                    
                            <p style={{justifyContent:"justify"}}><strong>Missão:</strong> {e.missao}</p>
                            <p><strong>Visão:</strong> {e.visao}</p>
                            <p><strong> Descricão:</strong> {e.descricao} </p>
                            <p><strong>Área de atuação:</strong> {e.area_atuacao}</p>
                            <p><strong>Redes sociais:</strong> {e.redes_sociais}</p>
                            <p><strong>Saiba mais:</strong> <a style={{color:"black", textDecoration:"solid"}} target='_blank' href={ (e.contato_site.includes("http") || e.contato_site.includes("https"))?  e.contato_site:  "https://" + e.contato_site }>{e.contato_site}</a></p>
        
                        </div>
                    ))}
                </div>

                <div className='container-avaliacao' >
                    <div className='container-h1'>
                        <h1> O que achou?</h1> 
                        <h1>Avalie nossa plataforma!</h1>
                    </div>
                    <div className='estrelas'>
                        <Estrelinhas estrelas = {estrelas} setEstrelas={setEstrelas} ></Estrelinhas>
                    </div>
                    <div className='feedback-container'>
                        <div>
                            <h1> Seu feedback é muito importante e suas sugestões podem ser utilizadas na nossa versão final. Deixe um comentario!</h1>
                        </div>
                    
                        <  textarea onChange={e => setFeedback(e.target.value)} placeholder='Ex: Senti dificuldade em preencher o campo...'></textarea>
                        
                     <button onClick={handleSubmitFeedback} className='btn-enviar-feedback' >Enviar</button>
                    </div>
                </div>
        
            </div>
            )
        
            
        </div>
       
       
       
    )
}

export default Oportunidades;

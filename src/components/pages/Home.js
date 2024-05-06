
import  logo from "../../images/logo-horizontes.PNG"
import video from "../../video/Horizontes_legenda.mov"
import "../../css/computador/computador.css"
import "../../css/tablet/tablet-1100-866.css"
import "../../css/tablet/tablet-866-725.css"
import "../../css/tablet/tablet-725-500.css"
import "../../css/celular/celular-500-400.css"
import "../../css/celular/celular-400-350.css"
import "../../css/celular/celular-350-300.css"
const Home = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = "/formulario";
    }
    return (
        <div className="container-body">
            <div className="home-up">
                <div className="home-up-container">
                    <div className="imagem-logo">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="container-p">
                        <p>Conectamos você com as melhores oportunidades para o seu perfil</p>
                    </div>
                    <div className="container-btn">
                        <div className="container-btn-intro">
                            <div className="container-btn-encontre-sua-oportunidade">
                                <button onClick={handleClick} className="btn-encontre-sua-oportunidade">ENCONTRE SUA OPORTUNIDADE</button>
                            </div>
                            <div className="sombra-button">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="home-middle">
                <div className="home-middle-intro">
                    <div className="video-cor-amarela-left"></div>
                    <div className="video-cor-laranja-left"></div>
                    <div className="video-cor-azul-claro-left"></div>
                    <div className="video-cor-azul-escuro-left"></div>
                    <div className="video">
                        <video  src={video} alt="Descrição do vídeo"   controls  preload="auto" ></video>{" "}
                    </div>
                    <div className="video-cor-azul-escuro-right" ></div>
                    <div className="video-cor-azul-claro-right"></div>
                    <div className="video-cor-laranja-right"></div>
                    <div className="video-cor-amarela-right"></div>
                </div>
            </div>

            <div className="home-down">
                <div className="container-home-down">
                <div className="container-como-funciona">
                    <div>
                        <h1>COMO FUNCIONA?</h1>
                    </div>
                    <div>
                        <p>Siga o passo a passo</p>
                    </div>
                </div>
                <div className="cards-container">
                    <div className="cards">
                        <div className="card-azul">
                            <div className="card-h2-container">
                                <h2>Preenchimento</h2>
                            </div>
                            <div className="container-card-p">
                                <p>Clique em 'Encontre sua </p>
                                <p> oportunidade' e preencha </p>
                                 <p>o formulário para te </p>
                                 <p> conhecermos melhor e </p>
                                 <p>entendermos seus objetivos</p>
                            </div>
                        </div>
                        <div className="card-laranja">
                            <div className="card-h2-container">
                                <h2>Mapeamento</h2>
                            </div>
                            <div className="container-card-p">
                                <p>Nossa plataforma fará</p>
                                <p>um mapeamento de </p>
                                <p>oportunidades que se</p>
                                <p> alinhem com o seu perfil e </p>
                                <p>com o seu contexto social</p>
                                
                            </div>
                        </div>

                        <div className="card-amarelo">
                            <div className="card-h2-container">
                                <h2>Conexão</h2>
                            </div>
                            <div className="container-card-p">
                                <p>É aqui que a mágica acontece!</p>
                                <p>Traçamos uma relação minunciosa</p>
                                <p>entre suas características</p>
                                <p>e as oportunidades mais </p>
                                <p>coerentes com você</p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                <div className="footer">
                    <p>
                        @2024 Horizontes, Inc.  
                    </p>
                 
                </div>
               
            </div>
          
            
        </div>
    );
}

export default Home;
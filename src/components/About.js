import image1 from '../images/look-up-svgrepo-com.svg';
import image2 from '../images/earth-globe-svgrepo-com.svg';
import image3 from '../images/light-bulb-svgrepo-com.svg';
import Video from './Video';

const About = () => {
    return (
        <div className='about-section-container'>
            <div className='about-section'>
            <div className='video-container'>
            <Video/>
            </div>
               
            
            <div className='about-content'>
            <h1>Como funciona?</h1>
            <div className='about-content-intro' >
            <div className='about-item'>
                    <img src={image1} alt="Ilustração de livro" className='about-image' />
                    <div className='about-text'>
                        <h2>Conhecimento</h2>
                        <p>Primeiro, vamos te conhecer de forma detalhada...</p>
                    </div>
                </div>
                <div className='about-item'>
                    <img src={image2} alt="Ilustração de pessoas" className='about-image' />
                    <div className='about-text'>
                        <h2>Conexão</h2>
                        <p>Depois, vamos conectar você com as melhores oportunidades...</p>
                    </div>
                </div>

                <div className='about-item'>
                    <img src={image3} alt="Ilustração de globo" className='about-image' />
                    <div className='about-text'>
                        <h2>A Mágica Acontece...</h2>
                        <p>É aqui que a mágica acontece! Traçamos uma relação minuciosa entre suas características e as oportunidades mais coerentes com seu perfil...</p>
                    </div>
                </div>
                
            </div>
            <div  className='footer-container'>
                <p>© 2024 Horizontes, Inc.</p>
                </div>
            </div>
            </div>
            
           
        </div>
    );
}

export default About;

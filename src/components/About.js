import image1 from '../images/book-alt.svg';
import image2 from '../images/comercial.svg';
import image3 from '../images/globo.svg';
import Video from './Video';
const About = () => {
    return (
        <div className='about'>
            <h1>Descubra como funciona</h1>
            <div>
                <div className='about_1'>
                    <div>
                        <img src={image1} alt="Ilustração de livro" />
                    </div>
                    <div className='about_1_1'>
                        <h2>Conhecimento</h2>
                        <p>Primeiro, vamos te conhecer de forma detalhada...</p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <img src={image2} alt="Ilustração de pessoas" />
                    </div>
                    <div>
                        <h2>Conexão</h2>
                        <p>Depois, vamos conectar você com as melhores oportunidades...</p>
                    </div>
             
                </div>
                <Video></Video>
                <div className='about_ultimo'>
                    <div>
                        <img src={image3} alt="Ilustração de globo" />
                    </div>
                    
                    <div >
                    <h2>A Mágica Acontece...</h2>
                    <p>É aqui que a mágica acontece! Traçamos uma relação minuciosa entre suas características e as oportunidades mais coerentes com seu perfil...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
    

export default About;
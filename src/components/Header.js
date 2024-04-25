import image from "../images/white_horiz.png"
const Header = () => {
    return (
        <header className="header-gradient">
            <div className="header-content">

                <img src={image} alt="Logo" className="header-logo" />
                <p>Conectamos você com a melhor oportunidade baseado no seu contexto de vida</p>
            </div>
            <div className="header-cta">
               <a href="/formulario">Encontre sua oportunidade</a>
            </div>
        </header>
    );
}

export default Header;

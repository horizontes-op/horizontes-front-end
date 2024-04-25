import About from "../About";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Video from "../Video";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header></Header>
            <About></About>
            <Footer></Footer> 
        </div>
    );
}

export default Home;
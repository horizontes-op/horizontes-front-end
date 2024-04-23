import logo from './logo.svg';
import './App.css';
import Home  from './components/pages/Home';
import Registration from './Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Oportunidades from './Oportunidades/Oportunidades';
import Mocks from "./mock/Mocks";


function App() {
  const dados = Mocks();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/formulario" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/oportunidades" element={<Oportunidades oportunidades={dados} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

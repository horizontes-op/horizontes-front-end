import logo from './logo.svg';
import './App.css';
import Home  from './components/pages/Home';
import Registration from './Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Oportunidades from '../src/Oportunidades/Oportunidades'; 
import React from 'react';

function App() {
 
  const [matches, setMatches] = React.useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/formulario" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/oportunidades" element={<Oportunidades matches={matches} setMatches = {setMatches} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

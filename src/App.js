import logo from './logo.svg';
import './App.css';
import Home  from './components/pages/Home';
import Registration from './Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Oportunidades from '../src/Oportunidades/Oportunidades'; 
import React from 'react';
import { useEffect } from 'react';
function App() {
 
  const [matches, setMatches] = React.useState(() => {
    const savedMatches = localStorage.getItem('matches');
    return savedMatches ? JSON.parse(savedMatches) : [];
  });

    
  useEffect(() => {
    localStorage.setItem('matches', JSON.stringify(matches));
  }, [matches]);

  // const [matches, setMatches] = React.useState([]);
  const [id_usuario, setId_usuario] = React.useState(()=> {
  const savedId_usuario = localStorage.getItem('id');
  return savedId_usuario ? JSON.parse(savedId_usuario) : [];

  })
  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(id_usuario));
  }, [id_usuario]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/formulario" element={< Registration  setId_usuario = {setId_usuario} setMatches ={setMatches}  />} />
          <Route path="/" element={<Home />} />
          <Route path="/oportunidades" element={<Oportunidades id_usuario = {id_usuario} matches={matches} setMatches = {setMatches} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

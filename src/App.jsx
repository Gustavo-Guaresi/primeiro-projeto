import './App.css';

// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';
 import Condicional from './components/Condicional';
// import OutraLista from './components/OutraLista';

// import { useState } from "react"
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'  //Erro ao não reconhecer Switch
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato"element={<Contato />} />
          <Route path="/condicional" element={<Condicional/>}/>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

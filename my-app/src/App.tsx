import React from 'react';
//import { Cookbook } from './pages/Cookbook';
import { Lateral } from './components/Header';
//import { Configuracoes } from './pages/Configuracoes';
//import { Equipamentos } from './pages/Equipamentos';

//import { Menus } from './pages/Menus';
//import Lateral from './components/Lateral';
import { Routes } from './routes/index';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
//import history from './services/history';

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Lateral />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;

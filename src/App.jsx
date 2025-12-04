import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './router/MainRouter'; // ← esta es la ruta correcta
import './styles/Global.css';

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;

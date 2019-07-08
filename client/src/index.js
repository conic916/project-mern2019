import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // funkcjonalnosc routingu , zmiana podstron, linkow
import './styles/global.scss';
import 'animate.css/animate.min.css';
// renderowanie komponentow app do DOM + router : 
const Root = () => (
  <Router>
    <App />
  </Router>
);
  
  ReactDOM.render(<Root />, document.getElementById('root'));

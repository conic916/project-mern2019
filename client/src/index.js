import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; 
// dla reducera : provider i store
import { Provider } from 'react-redux';
import store from './redux/store'; 
// funkcjonalnosc routingu , zmiana podstron, linkow
import './styles/global.scss';
import 'animate.css/animate.min.css';

// renderowanie komponentow app do DOM + router + provider ( store ): 
const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
  
  ReactDOM.render(<Root />, document.getElementById('root'));

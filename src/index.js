import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.hydrate(//hydrate é responsável por exibir no servidor
    <App />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Battlefront from './components/Battlefront';
import Exception from './components/ProdException';

ReactDOM.render(
  <Exception>
    <Battlefront />
  </Exception>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App items={items}/>
  </React.StrictMode>
);


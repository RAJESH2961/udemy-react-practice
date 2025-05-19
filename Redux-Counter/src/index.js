import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';// Importing Provider rfunction
import store from './store/index.js';// Importing store data from custom create dstore in store folder

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App  /></Provider>);

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import createStore from './create-store';

import { Provider } from 'react-redux';

const store = createStore();

ReactDOM.render(<Provider store={ store }><App /></Provider>,
document.getElementById('root'));
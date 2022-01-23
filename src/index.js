import React from 'react';
import { render } from 'react-dom'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import {store} from './Component/Redux/Store/index'
render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



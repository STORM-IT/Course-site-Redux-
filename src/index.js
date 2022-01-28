import React from 'react';
import { render } from 'react-dom'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './Component/Redux/Store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './Component/ContextApi/userContext';


render(
    <UserContext>

    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    </UserContext>
    , document.getElementById('root'));



import React from 'react';
import { render } from 'react-dom'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './Component/Redux/Store/index'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './Component/ContextApi/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-progress-2/main.css"

render(
    <BrowserRouter>
        <Provider store={store}>
            <UserContext>
                <App />
            </UserContext>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));



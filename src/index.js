import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { API_KEY } from './api/api';
import { BrowserRouter } from 'react-router-dom';

const axiosWithTokenAuth = axios.create();
axiosWithTokenAuth.interceptors.request.use(config => {
    config.headers.Auhorization = `Token ${API_KEY}`;
    return config;
}, (error) => Promise.reject(error));

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();

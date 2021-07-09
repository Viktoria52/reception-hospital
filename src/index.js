import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import redux_store from "./state/redux_store";

ReactDOM.render(
    <BrowserRouter >
        <Provider store={redux_store}>
            <App />
        </Provider>
        </BrowserRouter >,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * 使用Provider对顶层容器进行包裹，使所有组件都可以访问到store
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

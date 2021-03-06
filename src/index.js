import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
// HashRouter ->#; BrowserRouter->/
import {HashRouter} from "react-router-dom"

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root'));
registerServiceWorker();

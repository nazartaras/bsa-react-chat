import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route path="/" component={App}/>
    </Router>
</Provider>, document.getElementById('root'));

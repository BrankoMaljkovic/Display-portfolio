import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //ako je export default
//import { App } from "./App"; //ako je samo export
import "./styles.css";
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App 
        title="Title from index file"
        content="Content from index file"
        number={10} />
);

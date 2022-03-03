import React from 'react';
import ReactDOM from 'react-dom';
import style from './stylesheet/index.module.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./App";
import {Navbar} from "./Navbar";
import {Signin} from "./Signin";
import {Login} from "./Login";
import {Logout} from "./Logout";
import {Loginbtn} from "./Loginbtn";

ReactDOM.render(
    <React.StrictMode>
        <Navbar/>
        <div className ={style.content}>
        <Signin />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


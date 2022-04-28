import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers"
import { Provider } from "react-redux";


const store = createStore(allReducers);



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<Router>
    <Navbar/>
    <Route path="/signin" exact component={Signin} />
    <Route path="/Login" exact component={Login} />
</Router>*/

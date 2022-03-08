import './stylesheet/App.css';
import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Signin} from "./Signin";
import {Login} from "./Login";
import {About} from "./About";
import { Profile } from "./Profile"


class App extends Component {
    render() {
       return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={null}/>
                <Route path="/Signin" element={<Signin/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </BrowserRouter>
       )
    }
}
/*
<BrowserRouter>
    <Navbar />
    <Route path="/Signin" component={Signin}/>
</BrowserRouter>*/

export default App
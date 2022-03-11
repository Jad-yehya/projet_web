import './stylesheet/App.module.css';
import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Signin} from "./Signin";
import {Login} from "./Login";
import {About} from "./About";
import { Profile } from "./Profile"
import {Wall} from "./Wall";
import style from "./stylesheet/App.module.css"


class App extends Component {
    render() {
       return(
        <BrowserRouter>
            <Navbar/>
            <div className={style.routes}>
                <Routes>
                    <Route path="/" element={null}/>
                    <Route path="/Signin" element={<Signin/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Wall" element={<Wall/>}/>
                </Routes>
            </div>
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
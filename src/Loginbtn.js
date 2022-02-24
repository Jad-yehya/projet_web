import './App.css';
import {Component} from "react";
import style from "../stylesheet/Navbar.module.css";

export class Loginbtn extends Component {

    constructor(props) {
        super(props);
        this.callback_login = this.props.callback_login;
    }

    render() {
        return <button className={style.button}>Connexion</button>
    }
}
import {Component} from "react";
import style from "./stylesheet/Navbar.module.css";

export class Loginbtn extends Component {

    constructor(props) {
        super(props);
        this.callback_login = this.props.callback_login;
    }

    getConnected = () => {
        this.setState({ isConnected: true});
        alert("test");
        this.current_page = "homepage";
    }

    render() {
        return <button className={style.button} onClick={this.props.handler}>Connexion</button>
    }
}
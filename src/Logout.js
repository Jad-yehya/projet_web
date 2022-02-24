import {Component} from "react";
import style from "../stylesheet/Navbar.module.css"
import {Navbar} from "./Navbar";

export class Logout extends Component{
    constructor(props) {
        super(props);
        this.callback_logout = this.props.callback_logout
    }

    render() {
        return <button className={style.button} onClick={this.handleClicklogout}>Logout</button>
    }
}
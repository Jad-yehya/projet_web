import {Component} from "react";
import style from "./stylesheet/Navbar.module.css";
import {Link} from "react-router-dom";

export class Loginbtn extends Component {

    render() {
        return(
            <Link to="/Login">
                <button className={style.button}>Connexion</button>
            </Link>
        )
    }
}

import {Component} from "react";
import style from "./stylesheet/Navbar.module.css";
import {Link} from "react-router-dom";

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
        return(
            <Link to="/Login">
                <button className={style.button} onClick={this.props.handler}>Connexion</button>
            </Link>
        )
    }
}

/*
<Link>
    <button className={style.button} onClick={this.props.handler}>Connexion</button>
</Link>*/
import {Component} from "react";
import style from './stylesheet/Login.module.css';
import {Link} from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.callback_login = this.props.callback_login;
    }

    render() {
        return <div className={style.div1}>
            <h1 className={style.h1}>Connexion</h1>
            <form className={style.form}>
                <input id="login" className={style.input} type="text" placeholder="Identifiant"/>
                <input id="password" className={style.input} type="password" placeholder="Mot de passe"/>
                <Link to="/Wall">
                    <button className={style.button} id="Connexion" type="submit" value="Connexion">Connexion</button>
                </Link>

                <Link to="/Signin">
                    <button className={style.button} id="SignIn" type="submit">Créez un compte ?</button>
                </Link>
            </form>
        </div>
    }
}
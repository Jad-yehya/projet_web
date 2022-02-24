import './App.css';
import {Component} from "react";
import style from '../stylesheet/Login.module.css'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.callback_login = this.props.callback_login;
    }

    render() {
        return <div className={style.div1}>
            <h1>Connexion</h1>
            <form className="form">
                <input id="login" type="text" placeholder="Identifiant"/>

                <input id="password" type="password" placeholder="Mot de passe"/>
                    <button id="Connexion" type="submit" value="Connexion" formAction="base.html">Connexion</button>
                    <button id="Annuler" type="submit" formAction="inscription.html">Créez un compte ?</button>
            </form>
        </div>
    }
}
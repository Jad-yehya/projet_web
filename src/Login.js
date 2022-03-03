import {Component} from "react";
import style from './stylesheet/Login.module.css'

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
                    <button className={style.button} id="Connexion" type="submit" value="Connexion" formAction="base.html">Connexion</button>
                    <button className={style.button} id="SignIn" type="submit" formAction="inscription.html">Créez un compte ?</button>
            </form>
        </div>
    }
}
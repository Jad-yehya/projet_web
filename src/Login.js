import style from './stylesheet/Login.module.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logger} from "./actions";

export function Login(){

    //const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return(
        <div className={style.div1}>
            <h1 className={style.h1}>Connexion</h1>
            <form className={style.form}>
                <input id="login" className={style.input} type="text" placeholder="Identifiant"/>
                <input id="password" className={style.input} type="password" placeholder="Mot de passe"/>
                <Link to="/Wall">
                    <button className={style.button} id="Connexion" type="submit" value="Connexion" onClick={() => dispatch(logger())}>Connexion</button>
                </Link>

                <Link to="/Signin">
                    <button className={style.button} id="SignIn" type="submit">Créez un compte ?</button>
                </Link>
            </form>
        </div>
    )

}

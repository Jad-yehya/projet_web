import React from "react";
import style from './stylesheet/Login.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logger} from "./actions";


export function Signin() {

        //const isLogged = useSelector(state => state.isLogged);
        const dispatch = useDispatch()

        return <div className={style.div1}>
            <h1 className={style.h1}>Inscription</h1>
            <form className={style.form}>
                <div className={style.nameSurname}>
                    <label htmlFor="Nom"/><input className={style.input} id="Nom" type="text" placeholder="Nom"/>
                    <label htmlFor="Prenom"/><input className={style.input} id="Prenom" type="text" placeholder="Prénom"/>
                </div>
                <label htmlFor="pass"/><input className={style.input} id="pass" type="password" placeholder="Mot de passe"/>
                <label htmlFor="pass_verif"/><input className={style.input} id="pass_verif" type="password"
                                                           placeholder="Confirmez le mot de passe"/>
                <label htmlFor="cursus"/>
                <select className={style.select} id="cursus" defaultValue="">
                    <option value="" disabled selected>Cursus</option>
                    <option value="0">Informatique</option>
                    <option value="1">Chimie</option>
                    <option value="2">Sciences de la vie</option>
                    <option value="3">Sciences de la Terre</option>
                    <option value="4">Mécanique</option>
                    <option value="5">Physique</option>
                    <option value="6">Mathématiques</option>
                    <option value="7">Environnement</option>
                    <option value="8">Electronique</option>
                </select>
                <label htmlFor="email"/><input className={style.input} id="email" type="email" placeholder="prenom.nom@etu.sorbonne-universite.fr"/>
                <label htmlFor="telephone"/><input className={style.input} id="telephone" type="tel" placeholder="+33601020304"/>
                <label htmlFor="date_naissance"/><input className={style.input} id="date_naissance" type="date" placeholder="01/01/2004"/>
                <Link to="/">
                    <button id="cree_compte" type="submit" className={style.button} onClick={() => {dispatch(logger())}}>Créez un compte</button>
                </Link>

                <Link to="/Login">
                    <button id="retour" type="submit" className={style.button}>Back</button>
                </Link>
            </form>
        </div>
}
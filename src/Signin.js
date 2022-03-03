import React from "react";
import style from './stylesheet/Login.module.css'

export class Signin extends React.Component {

    render() {
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
                <select className={style.select} id="cursus">
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
                <button id="cree_compte" type="submit" className={style.button} formAction="inscription.html">Créez un compte</button>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={style.button} href={null}>Back</a>
            </form>
        </div>
    }
}
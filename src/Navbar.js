import React from 'react'
import style from "./stylesheet/Navbar.module.css"
import {Loginbtn} from "./Loginbtn";
import {Logout} from "./Logout";
import logo from "./stylesheet/Logo_Netsu.svg";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";


export function Navbar() {

    const isLogged = useSelector(state => state.isLogged);


    return (<header>
        {isLogged ?
            <Link to="/Wall" className={style.logo}>
                <img className={style.logo} src={logo} alt="logo"/>
            </Link> :
            <Link to="/" className={style.logo}>
                <img className={style.logo} src={logo} alt="logo"/>
            </Link>
        }
        <nav>
            <ul className={style.nav_links}>
                <Link to="/Profile">
                    <li>Profil</li>
                </Link>

                <Link to="/About">
                    <li>A Propos</li>
                </Link>
            </ul>
        </nav>
        <div>
            <input className={style.searchBar} type="text" placeholder="Rechercher"/>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

               {isLogged ?
               <Link to="/"><Logout /> </Link>: <Loginbtn />}

        </div>
    </header>)
}



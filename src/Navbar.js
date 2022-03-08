import React from 'react'
import style from "./stylesheet/Navbar.module.css"
import {Loginbtn} from "./Loginbtn";
import {Logout} from "./Logout";

import { Link } from 'react-router-dom';


export class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isConnected: false};
        this.current_page = "connexion";
        //this.getConnected = this.getConnected.bind(this);
        //this.setLogout = this.setLogout.bind(this);
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.state.isConnected ? this.setLogout() : this.getConnected()
    }

    getConnected = () => {
        this.setState({ isConnected: true});
        this.current_page = "homepage";
    }

    setLogout = () => {
        this.setState({ isConnected: false });
        this.current_page = "connexion";
    }

    render() {
        return (<header>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/" className={style.logo}>
                <img className={style.logo} src="" alt="logo"/>
            </Link>
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
                <a href={null}>
                   {this.state.isConnected ? <Logout callback_logout={this.props.logout} handler={this.handler}/> : <Loginbtn callback_login={this.props.login} handler={this.handler}/>}
                </a>
            </div>
        </header>)
    }
}


/*
<ul className={style.nav_links}>
    <Link to="/profile">
        {/!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/}
        <li>Profil</li>
    </Link>

    <Link to="/about_us">
        {/!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/}
        <li>A Propos</li>
    </Link>
</ul>*/

import React from 'react'
import style from "./stylesheet/Navbar.module.css"
import {Loginbtn} from "./Loginbtn";
import {Logout} from "./Logout";


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
        return <header>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={style.logo} href={null}>
                <img className={style.logo} src="" alt="logo"/>
            </a>
            <nav>
                <ul className={style.nav_links}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Profil</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">A Propos</a></li>
                </ul>
            </nav>
            <div>
                <input className={style.searchBar} type="text" placeholder="Rechercher"/>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href={null}>
                   {this.state.isConnected ? <Logout callback_logout={this.props.logout} handler={this.handler}/> : <Loginbtn callback_login={this.props.login} handler={this.handler}/>}
                </a>
            </div>
        </header>
    }
}
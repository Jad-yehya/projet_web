import './stylesheet/App.css';
import {Component} from "react";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {isConnected: true};
        this.current_page = "connexion";
        this.getConnected = this.getConnected.bind(this);
    }

    getConnected = () => {
        this.state.isConnected = true;
        this.current_page = "homepage";
    }

    setLogout = () => {
        this.state.isConnected = false;
        this.current_page = "connexion";
    }

    /*    render() {
            return <div>
                <NavigationPannel login={this.getConnected}
                                  logout={this.setLogout}
                                  isConnected={this.state.isConnected}/>
            </div>
        }*/
}

export default MainPage;

import { Component } from "react";

import style from './stylesheet/Profile.module.css'
import {Wall} from "./Wall";
import {Stats} from "./Stats";

export class Profile extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Profile</h1>
                    <Stats/>
                </div>
                <div>
                    <Wall />
                </div>
            </div>
        )
    }
}
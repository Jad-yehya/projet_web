import style from './stylesheet/Profile.module.css'
import {Wall} from "./Wall";
import {Stats} from "./Stats";
import {useSelector} from "react-redux";

export function Profile() {

    const isLogged = useSelector(state => state.isLogged);
    return (
    <div>
        {
            isLogged ?
                <div>
                    <div>
                        <h1>Profile</h1>
                        <Stats/>
                    </div>
                    <div>
                        <Wall/>
                    </div>
                </div> :
                <h1>Connectez-vous pour accéder à votre profil.</h1>
        }
    </div>
    )
}
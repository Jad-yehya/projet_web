import {Wall} from "./Wall";
import {Stats} from "./Stats";
import {useSelector} from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";


export function Profile() {

    const isLogged = useSelector(state => state.isLogged);

    const [user, setUser] = useState({});

    const getUser = () => {
        // Appel API pour récupérer les stats
        axios.get("http://localhost:4000/user/1") // Remplacer le 1 par le user_id
            .then((response) => {
                setUser(response.data)
            })
    }

    useEffect(()=> {
        getUser();
    }, []);


    return (
    <div>
        {
            isLogged ?
                <div>
                    <div>
                        <h1>{user.login || "Anonyme"}</h1>
                        <Stats />
                    </div>
                    <div>
                        <Wall />
                    </div>
                </div> :
                <h1>Connectez-vous pour accéder à votre profil.</h1>
        }
    </div>
    )
}
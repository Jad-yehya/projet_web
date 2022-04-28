import {useState, useEffect} from "react";
import axios from "axios";
import { uuid4 } from "uuid4"; // Crée des key unique pour toutes les liste que l'on aura à afficher
import {User} from "./User";

const baseURL = "http://localhost:4000/friends"

export const Ami = () => {
    const [ami, setami] = useState({friend_id: []});

/*    const getami = () => {
        // Appel API pour récupérer les données
        axios.get(baseURL+"/getFriends")
            .then((response) => {
                setami({friend_id: response.data});
            });
    }

    useEffect(()=> {
        getami();
    }, [])*/

    // TODO : Creer un composant User qui permet d'afficher l'utilisateur d'id id
    // Affiche nom, prenom et profile pic


    //const list_friends = ami.friend_id.map((d) => <li key={uuid4()}><User id={d}/></li> ) || []
    const list_friends = [123, 34, 345]
    console.log(list_friends)
    return(
        <div>
            {ami.friend_id === [] ? <h1>Vous n'avez pas d'amis</h1> : {list_friends}}
        </div>
    )
}
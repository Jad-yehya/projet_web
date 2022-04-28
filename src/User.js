import {useState, useEffect} from "react";
import axios from "axios";

const baseURL = "http://localhost:4000/user/"

export const User = ({id}) => {
    const [user, setUser] = useState({});

    const getUser = () => {
        //Appel API pour récupérer les données
        axios.get(baseURL + `1`)
            .then((response) => {
                setUser(response.data)
                console.log(response.data)
            });
    }

    useEffect( () => {
        getUser();
    }, [getUser]);

    return (
        <h1>ZRPIAHEGAEPIH</h1>
    )
}
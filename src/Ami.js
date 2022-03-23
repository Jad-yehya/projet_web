import {useState, useEffect} from "react";

export const Ami = () => {
    const [ami, setami] = useState({nom: "", prenom: ""});

    const getami = () => {
        // Appel API pour récupérer les données
        const n = ""
        const p = ""
        setami({nom: n, prenom: p});
    }

    useEffect(()=> {
        getami();
    })

}
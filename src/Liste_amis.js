import {useState, useEffect} from "react";

export const Liste_amis = () => {
    const [Lamis, setLamis] = useState([]);

    const getLamis = () => {
        // Appel API pour récupérer les stats
        const LAmis = [];
        setLamis(LAmis);
    }

    useEffect(()=> {
        getLamis();
    })

    return (
        <div>
            <div>Vous êtes ami avec :</div>
            <div>{Lamis.map(a => <p>{a.prenom} {a.nom}</p>)}</div>
        </div>
    )
}
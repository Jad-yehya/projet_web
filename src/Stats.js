import {useEffect, useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom";

const baseURL = "http://localhost:4000/user/Stats/"

export const Stats = () => {
    const [stats, setStats] = useState({amis: 0});

    const getStats = () => {
        // Appel API pour récupérer les stats
        axios.get(baseURL+"1") // Remplacer le 1 par le user_id
            .then((response) => {
                setStats({amis: response.data})
            })
    }

    useEffect(()=> {
        getStats();
    }, []);

    if (Stats.amis === 0) Stats.amis = -1;

    return (
        <div>
            {stats.amis > 1 ? 
                <Link to="/Friends_list">
                    <div>{stats.amis} Amis</div>
                </Link> 
                :
                <Link to="/Friends_list">
                    <div>{stats.amis} Ami</div>
                </Link>
            }
        </div>
    )
}
import {useState} from "react";

export const Stats = () => {
    const [stats, setStats] = useState({amis: 0});

/*    const getStats = () => {
        // Appel API pour récupérer les stats
        const namis = null;
        setStats({amis: namis});
    }

    useEffect(()=> {
        getStats();
    })*/

    return (
        <div>
            {stats.amis > 1 ? <div>{stats.amis} Amis</div> : <div>{stats.amis} Ami</div>}
        </div>
    )
}
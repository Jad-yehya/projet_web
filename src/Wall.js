import {useEffect, useState} from "react";
import { Tweet } from "./Tweet";
import axios from "axios";
import style from "./stylesheet/Wall.module.css"
import {v4 as uuid} from "uuid";
import NewTweet from "./NewTweet";


const baseURL = "http://localhost:4000/tweet/"

export const Wall = () => {

    const [wall, setWall] = useState({c: []})

    const getWall = () => {
        axios.get(baseURL+"getTweet/")
            .then((response) => {
                setWall({c: response.data})
            })
    }


    useEffect( () => {
        getWall()
    }, []);

    const test = wall.c.map((d) => <Tweet key={uuid()} title={d.title} content={d.content} userid={d.userid}/>)
    console.log(test)
    return (
        <div>
            <NewTweet addTweet={getWall}/>
            <div className={style.tweetWall}>
                {test}
            </div>
        </div>
    )
}
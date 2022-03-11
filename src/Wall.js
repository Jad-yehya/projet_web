import { useState } from "react";
import { Tweet } from "./Tweet";
import style from "./stylesheet/Wall.module.css"

export const Wall = () => {

    return (
        <div className={style.tweetWall}>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </div>
    )
}
import { useState } from "react";
import style from "./stylesheet/Tweet.module.css"

export const Tweet = (props) => {
    //const [text, setText] = useState({title: 'Titre', content: 'Content'});

    return (
        <div className={style.tweet}>
            <div className={style.div_title}>
                <h1>{props.title}</h1>
            </div>

            <div>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

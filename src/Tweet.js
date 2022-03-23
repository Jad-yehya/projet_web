import { useState } from "react";
import style from "./stylesheet/Tweet.module.css"

export const Tweet = () => {
    const [text, setText] = useState({title: 'Titre', content: 'Content'});

    return (
        <div className={style.tweet}>
            <div className={style.div_title}>
                <h1>{text.title}</h1>
            </div>

            <div>
                <p>{text.content}</p>
            </div>
        </div>
    )
}

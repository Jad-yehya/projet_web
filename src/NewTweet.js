import React from 'react';
import { useState, useEffect } from 'react';
import style from './stylesheet/NewTweet.module.css';


function NewTweet(props) {

    const [text, setText] = useState({title: '', content: ''});

    useEffect(() => {
        console.log(text)
    }, [text]);

    

    return (
        <div className={style.tweet_box}>
            <div className={style.title}>
                <input type="text" placeholder="Titre" value={text.title} onChange={(e) => setText({...text, title: e.target.value})}/>
            </div>
            <div className={style.TweetContent}>
                <textarea className={style.TweetContent} placeholder="Content" value={text.content} onChange={(e) => setText({...text, content: e.target.value})}/>
            </div>
        </div>
    )


}

export default NewTweet ;
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import style from './stylesheet/NewTweet.module.css';

const BaseURL = 'http://localhost:4000/tweet/';

function NewTweet(props) {

    const [text, setText] = useState({title: '', content: ''});

    const handleChange = (event) => {
        setText({...text, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(BaseURL+"createTweet/", {title: text.title, content: text.content, userid: 3})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div className={style.tweet_box}>
            <div className={style.title}>
                <input className={style.title} type="text" placeholder="Titre" value={text.title} onChange={(e) => setText({...text, title: e.target.value})}/>
            </div>
            <div className={style.TweetContent}>
                <textarea className={style.TweetContent} placeholder="Content" value={text.content} onChange={(e) => setText({...text, content: e.target.value})}/>
            </div>
            <button className={style.TweetButton} onClick={
                (e) => {
                    handleSubmit(e);
                    setText({title: '', content: ''});
                }
            }>Tweet</button>
        </div>
    )

}

export default NewTweet ;
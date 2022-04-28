import React from 'react';
import { useState } from 'react';


function NewTweet(props) {

    const [text, setText] = useState({title: '', content: ''});

    const handleChange = (event) => {
        setText({...text, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTweet(text);
        setText({title: '', content: ''});
    }

    return (
        <div className="newTweet">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={text.title} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" name="content" value={text.content} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )


}

export default NewTweet ;
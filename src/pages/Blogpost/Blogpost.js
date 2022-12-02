import React from 'react';
import {useParams} from 'react-router-dom';
import './Blogpost.css';
import posts from '../../data/posts.json';

function Blogpost() {
    const {id} = useParams();

    return (
        <>
            <div className="blogpost">
                <h1>{posts[id-1].title}</h1>
                <p>{posts[id-1].date}</p>
                <p>{posts[id-1].content}</p>
            </div>
        </>
    );
}

export default Blogpost;
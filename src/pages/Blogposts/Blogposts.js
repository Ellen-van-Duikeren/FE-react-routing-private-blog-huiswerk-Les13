import React from 'react';
import './Blogposts.css';
import {Link, useParams} from 'react-router-dom';
import posts from '../../data/posts.json';

function Blogposts() {
    const {id} = useParams();

    return (
        <>
            <div className="blogposts">
                <h1>Blog overzichtspagina</h1>
                <h2>Aantal blogposts: {posts.length}</h2>
                <ol>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link to={"/blogpost/" + post.id}>{ post.title }</Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    );
}

export default Blogposts;
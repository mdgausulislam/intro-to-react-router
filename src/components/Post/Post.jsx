import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const { id, title, body } = post;
    return (
        <div className="post">
            <h5>Id:{id}</h5>
            <h4>{title}+</h4>
            <p>{body}</p>
            <Link className='link-details' to={`/post ${id}`}>Show post Details</Link>
            <button className='btn-show'>Show post Details</button>
        </div>
    );
};

export default Post;
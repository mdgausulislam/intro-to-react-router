import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const { id, title, body } = post;
    const navigate =useNavigate();
    const handleNavigation=()=>{
        navigate(`/post/${id}`);

    }
    return (
        <div className="post">
            <h5>Id:{id}</h5>
            <h4>{title}+</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show post Details</Link>
            <Link to={`/post/${id}`}><button className='btn-show'>Show post Details</button></Link>
            <button onClick={handleNavigation} className='btn-show'>With Button Handler</button>
            
            
        </div>
    );
};

export default Post;
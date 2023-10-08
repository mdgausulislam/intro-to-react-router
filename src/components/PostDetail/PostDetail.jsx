import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post=useLoaderData();
    const {id,title,useId,body}=post;
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Details About your Post:{id}</h1>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <p>{useId}</p>
            <button onClick={ handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
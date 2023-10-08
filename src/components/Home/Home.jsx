import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import PostDetail from '../PostDetail/PostDetail';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
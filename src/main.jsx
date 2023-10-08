import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path:'/about',
//     element:<About></About>
//   },
//   {
//     path:'/contact',
//     element:<Contact></Contact>
//   }
// ])

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendDetails></FriendDetails>

      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

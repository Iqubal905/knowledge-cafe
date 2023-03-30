import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
const Home = () => {
    const [blogs, setBlogs] =useState([]);
  
   
    useEffect(() => {
        fetch('data.json')
     .then(res => res.json())
     .then(data => setBlogs(data))

    },[])
     
    return (
        <div className='container'>
           <div className='blog-container'>
           {
            blogs.map(blog => <Blog
              key = {blog.id}
              blog = {blog}
            ></Blog>)
           } 
           </div>
           <div className='sidebar-container'>
            <Sidebar></Sidebar>
           </div>
        </div>
    );
};

export default Home;
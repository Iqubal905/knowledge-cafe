import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
const Home = () => {
    const [blogs, setBlogs] =useState([]);
    const [time, setTime] = useState(0)


    const handleWatchTime = (watchTime) =>{
        const sum = parseInt(time) + parseInt(watchTime)
        setTime(sum)
      
      }
   
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
              handleWatchTime = {handleWatchTime}
            ></Blog>)
           } 
           </div>
           <div className='sidebar-container'>
            <Sidebar time={time}></Sidebar>
           
           </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
import BookmarksTitle from '../BookmarksTitle/BookmarksTitle';
const Home = () => {
    const [blogs, setBlogs] =useState([]);
    const [time, setTime] = useState(0)
   
    const [blogTitle, setBlogTitle] = useState([])

    const handleBlogTitle = (title) =>{
      const newBlogTitle = [...blogTitle, title];
      setBlogTitle(newBlogTitle);
     }

    
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
             handleBlogTitle = {handleBlogTitle}
            ></Blog>)
           } 
           </div>
           <div className='sidebar-container'>
            <Sidebar time={time}
                      blogLength={blogTitle.length}
                      blogTitle={blogTitle}
            ></Sidebar>
           {
            blogTitle.map(eachTitle => <BookmarksTitle eachTitle={eachTitle}> </BookmarksTitle>)
           }
       
           </div>
        </div>
    );
};

export default Home;
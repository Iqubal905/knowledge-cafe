import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import BookmarksTitle from '../BookmarksTitle/BookmarksTitle';

const Home = () => {
    const [blogs, setBlogs] =useState([]);
    const [time, setTime] = useState(0)
   
    const [blogTitle, setBlogTitle] = useState([])
    const [blogId, setBlogId] = useState([])

    const handleBlogTitle = (title) =>{
       
      const newBlogTitle = [...blogTitle, title];
      setBlogTitle(newBlogTitle);

      const newBlogId = [...blogId, title.id];
      setBlogId(newBlogId);
       console.log(blogId);
       console.log(title.id);
       const str = blogId.toString()
      if(str.includes(title.id)){
       toast('Already Bookmarked')
      }

   
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
                    
            ></Sidebar>
        <div className='title-container'>
        {
            blogTitle.map(eachTitle => <BookmarksTitle 
              key = {eachTitle.id}
              eachTitle={eachTitle.blog_title}> </BookmarksTitle>)
           }
        </div>
       
           </div>
          
        </div>
    );
};

export default Home;
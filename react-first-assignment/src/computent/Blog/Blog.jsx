import React from 'react';
import './Blog.css'
const Blog = (props) => {
   const {id, cover_img, author_img, author_name, blog_title, read_time, publish_date} = props.blog
  
    return (
        <div className='blog'>
            <div>
                <img src={cover_img} className="cover-img" alt="" />
            </div>
            <div className='container'>
             <div className='sub-container'>
             <img src={author_img} className="author-img" alt="" />
             <div>
                <h2>{author_name}</h2>
                <p>{publish_date}</p>
             </div>
             </div>
             <div className='sub-container'>
               <p>{read_time}</p>

             </div>
            </div>
            <h1>{blog_title}</h1>
            <button>Marks as read</button>
            
        </div>
    );
};

export default Blog;
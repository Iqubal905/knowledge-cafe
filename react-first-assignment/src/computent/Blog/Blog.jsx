import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import './Blog.css'
const Blog = (props) => {
   const {id, cover_img, author_img, author_name, blog_title, read_time, publish_date} = props.blog
  
   const handleWatchTime = props.handleWatchTime;
  const handleBlogTitle = props.handleBlogTitle
 

    return (
        <div className='blog'>
            <div>
                <img src={cover_img} className="cover-img" alt="" />
            </div>
            <div className='blog-under-container'>
             <div className='sub-container'>
             <img src={author_img} className="author-img" alt="" />
             <div>
                <h2>{author_name}</h2>
                <p>{publish_date}</p>
             </div>
             </div>
             <div className='sub-container-right'>
               <p>{read_time} min read</p>
              <button className='bookmark-btn' onClick={() => handleBlogTitle(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button>
             </div>
            </div>
           <div className='blog-title'>
           <h2>{blog_title}</h2>
            <p onClick={() =>handleWatchTime(read_time)}>Marks as read</p>
           </div>
            
        </div>
    );
};

export default Blog;
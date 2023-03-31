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
              <button onClick={() => handleBlogTitle(blog_title)}><FontAwesomeIcon icon={faBookmark} /></button>
             </div>
            </div>
            <h2>{blog_title}</h2>
            <button onClick={() =>handleWatchTime(read_time)}>Marks as read</button>
            
        </div>
    );
};

export default Blog;
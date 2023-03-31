import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
   const {time, blogLength} = props
 
    return (
        <div className='sidebar'>
            <h4>Spent time on read : {time}</h4>
           <h2>Bookmarked Blog : {blogLength}</h2>
         
        </div>
    );
};

export default Sidebar;
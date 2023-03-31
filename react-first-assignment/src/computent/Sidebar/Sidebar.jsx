import React from 'react';

const Sidebar = (props) => {
   const {time, blogLength, blogTitle} = props
 
    return (
        <div>
            <h4>Spent time on read : {time}</h4>
           <h2>Bookmarks : {blogLength}</h2>
           <h4>{blogTitle}</h4>
        </div>
    );
};

export default Sidebar;
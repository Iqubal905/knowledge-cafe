import React from 'react';

const Sidebar = (props) => {
   const {time, blogLength} = props
 
    return (
        <div>
            <h4>Spent time on read : {time}</h4>
           <h2>Bookmarks : {blogLength}</h2>
         
        </div>
    );
};

export default Sidebar;
import React from 'react';

const Sidebar = (props) => {
   const {time} = props
   console.log(time);
    return (
        <div>
            <h4>Spent time on read : {time}</h4>
        </div>
    );
};

export default Sidebar;
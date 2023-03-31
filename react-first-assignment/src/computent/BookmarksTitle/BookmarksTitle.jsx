import React from 'react';
import './BookmarkesTitle.css'
const BookmarksTitle = ({eachTitle}) => {
    
    return (
        <div className='book-title'>
           <h2>{eachTitle}</h2> 
        </div>
    );
};

export default BookmarksTitle;
import React from 'react';
import './Card.css';

const BookCard = ({ book, isBookInBookshelf, onAdd, onRemove }) => {
    return (
        <div className="book-card">
            <div className='book-content'>
                <h3>{book.title}</h3>
                <p>{book.author_name && book.author_name.join(', ')}</p>
            </div>

            <div className='img-container'>
            <img className='book-cover' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt='bookcover'/>
            </div>

            
            
            {isBookInBookshelf(book.key) ? (
                <button className='remove-button' onClick={() => onRemove(book.key)}>Remove from Bookshelf</button>
            ) : (
                <button className='add-button' onClick={() => onAdd(book)}>Add to Bookshelf</button>
            )}
        </div>
    );
};

export default BookCard;

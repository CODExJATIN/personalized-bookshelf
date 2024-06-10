
import React, { useContext } from 'react';
import BookCard from '../../Components/Card';
import BookshelfContext from '../../context/BookshelfContext';
import './MyBookShelf.css';

const MyBookshelfPage = () => {
    const { bookshelf, removeFromBookshelf, isBookInBookshelf } = useContext(BookshelfContext);

    return (
        <div className="bookshelf-page">
            <h1>My Bookshelf</h1>
            <div className="book-list">
                {bookshelf.map(book => (
                    <BookCard
                        key={book.key}
                        book={book}
                        isBookInBookshelf={isBookInBookshelf}
                        onAdd={() => {}}
                        onRemove={removeFromBookshelf}
                    />
                ))}
            </div>
            <button onClick={() => window.location.href = '/'} className="back-button">Back to Search</button>
        </div>
    );
};

export default MyBookshelfPage;
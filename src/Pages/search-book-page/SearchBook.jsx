
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import BookCard from '../../Components/Card';
import BookshelfContext from '../../context/BookshelfContext';
import './SearchBook.css';
import { toast } from 'react-toastify';
import LoadingIcons from 'react-loading-icons';

const BookSearchPage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { addToBookshelf, removeFromBookshelf, isBookInBookshelf } = useContext(BookshelfContext);

    useEffect(() => {
        if (query.length > 2) {
            setLoading(true);
            axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then(response => {
                    setBooks(response.data.docs);
                    setLoading(false); 
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    toast.error('An Error Occured');
                    setLoading(false); 
                });
        }
    }, [query]);

    return (
        <div className="search-page">
            <div className='header-area'>
                <h1>Book Search</h1>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a book"
                    className="search-input"
                />
            </div>
            
            <div className="book-list">
            {loading ? (
                    <LoadingIcons.TailSpin stroke='black' className='spin-icon'/>
                ) : books.length === 0 && query.length <= 2 ? (
                    <div className='instruction-screen'>Enter book name in the search bar to find the book.</div> 
                ) : (
                    books.map(book => (
                        <BookCard
                            key={book.key}
                            book={book}
                            isBookInBookshelf={isBookInBookshelf}
                            onAdd={addToBookshelf}
                            onRemove={removeFromBookshelf}
                        />
                    ))
                )}
            </div>
            <button onClick={() => window.location.href = '/MyBookshelf'} className="bookshelf-button">Go to My Bookshelf</button>
        </div>
    );
};

export default BookSearchPage;
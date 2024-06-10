import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const BookshelfContext = createContext();

export const BookshelfProvider = ({ children }) => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    const addToBookshelf = (book) => {
        if (!isBookInBookshelf(book.key)) {
            const updatedBookshelf = [...bookshelf, book];
            setBookshelf(updatedBookshelf);
            localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
            toast.success("Added successfully");
        }
    };

    const removeFromBookshelf = (bookKey) => {
        const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        toast.success('Removed Successfully');
    };

    const isBookInBookshelf = (bookKey) => {
        return bookshelf.some(book => book.key === bookKey);
    };

    return (
        <BookshelfContext.Provider value={{ bookshelf, addToBookshelf, removeFromBookshelf, isBookInBookshelf }}>
            {children}
        </BookshelfContext.Provider>
    );
};

export default BookshelfContext;

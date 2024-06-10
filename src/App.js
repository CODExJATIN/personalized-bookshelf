import React from 'react';
import { Routes,Route } from 'react-router-dom';
import  BookSearchPage  from './Pages/search-book-page/SearchBook'
import  MyBookshelfPage from './Pages/my-bookshelf-page/MyBookshelf'
import { BookshelfProvider } from './context/BookshelfContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'


function App() {
  return (
    <div className="App">
      
    <BookshelfProvider>
      <Routes>
        <Route path="/" element={<BookSearchPage/>} />
        <Route path="/MyBookshelf" element={<MyBookshelfPage/>} />
      </Routes>
      <ToastContainer/>
    </BookshelfProvider>
      
    </div>
  );
}

export default App;

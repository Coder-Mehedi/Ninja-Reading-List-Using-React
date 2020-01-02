<<<<<<< HEAD
import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
=======
import React, { useState } from 'react'
import './App.css'
import BookContextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import Calculator from './components/Calculator'

>>>>>>> origin

function App() {
  
  return (
    <div className="App">
      
      <BookContextProvider>
        <ThemeContextProvider>
          <Navbar />
        </ThemeContextProvider>
        <BookList />
        <BookForm />
      </BookContextProvider>
<<<<<<< HEAD
      
=======
      <Calculator />
>>>>>>> origin
    </div>
  );
}

export default App

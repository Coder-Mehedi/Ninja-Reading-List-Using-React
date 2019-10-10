import React, { useState } from 'react'
import './App.css'
import BookContextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import Calculator from './components/Calculator'


function App() {
  
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
      <Calculator />
    </div>
  );
}

export default App

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyRead.module.scss';

import myReadsIcon from "../../assets/images/icons/reading-newspaper.svg";
import plusIcon from "../../assets/images/icons/plus.svg";

import {
  getAll as getAllBooksAPI,
  update as updateBookShelfAPI
} from "../../BooksAPI.js";
import BookShelfs from '../../components/bookShelfs/bookShelfs';

const MyRead = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = () => {
    getAllBooksAPI()
      .then((res) => {
        setBooks(res)
      })
      .catch((e) => console.log(e))
  }

  const updateShelf = (book, shelf) => {
    updateBookShelfAPI(book, shelf)
      .then(() => {
        book.shelf = shelf;
        const updatedBooks = books.filter(b => b.id !== book.id);
        setBooks((prevBooks) => [...prevBooks, updatedBooks])
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getAllBooks();
  }, [])



  return (
    <div className={`${styles.MyRead} container`}>
      <div className={`${styles.MyRead__title}`}>
        <img src={myReadsIcon} alt="myreads-icon" />
        <h1>My reads</h1>
      </div>

      <BookShelfs books={books} updateShelf={updateShelf} />

      <Link to="/search" className={styles.MyRead__link}>
        <img src={plusIcon} alt="plus-icon" />
      </Link>
    </div>
  );
}

export default MyRead;

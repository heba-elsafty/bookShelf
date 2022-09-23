import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { ToastContainer, toast } from 'react-toastify';

import arrowBackIcon from "../../assets/images/icons/back-arrow.svg";
import bookFindIcon from "../../assets/images/icons/book-find.svg";
import sorryIcon from "../../assets/images/icons/apology.svg";
import * as BooksAPI from "../../BooksAPI.js";
import BookDetails from '../../components/bookDetails/bookDetails';

import styles from './bookSearch.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);

  const searchBookChange = (event) => {
    const query = event.target.value.trim();
    setQuery(query);
    if (query) {
      BooksAPI.search(query, 20)
        .then(books => {
          if (books.length > 0) {
            setBooks(books);
          } else {
            setBooks([]);
            setError(true)
          }
        });
    } else {
      setBooks([]);
    }
  };


  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        toast(`Successfuly🥳, Now the ${book.title} you can found it in a ${shelf} list `)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <div className={styles.BookSearch}>
      <ToastContainer />
      <div className={styles.BookSearch__searchBar} >
        <Link to="/">
          <img src={arrowBackIcon} alt="arrow back icon" />
        </Link>

        <DebounceInput
          className={styles.BookSearch__searchBar__input}
          debounceTimeout={30}
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={searchBookChange}
        />

      </div>
      <div className={`container ${styles.BookSearch__result}`}>
        <div>
          {
            books.length > 0 ? (
              <>
                <div className={styles.BookSearch__result__total}>
                  <h2>Search returned <strong>{books.length}</strong> books </h2>
                </div>
                <div className={styles.bookContaner}>
                  {
                    books.map((book) => (
                      <BookDetails key={book.id} book={book} changeBookShelf={updateShelf} isDefaultValueNone />
                    ))
                  }
                </div>
              </>
            ) : (
              !error ?
                <div className={styles.BookSearch__findBook}>
                  <img src={bookFindIcon} alt="bookfind icon" />
                  <h4>please write in the search input  to find the book that you need</h4>
                </div> : (
                  <div className={styles.BookSearch__notFindBook}>
                    <img src={sorryIcon} alt="sorry icon" />
                    <h4>
                      Your search didn't find a book. Try again with a different
                      keyword.
                    </h4>
                  </div>
                )
            )
          }
        </div>
      </div>
    </div >
  );
}

export default BookSearch;

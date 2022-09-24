import React from 'react';
import PropTypes from 'prop-types';
import styles from './bookShelfs.module.scss';

import currentlyReadingIcon from "../../assets/images/icons/reading-books.svg";
import readIcon from "../../assets/images/icons/book.svg";
import wantToReadIcon from "../../assets/images/icons/wanted-poster.svg";
import BookDetails from '../bookDetails/bookDetails';

const BookShelfs = ({
  books,
  updateShelf
}) => (
  <div className={styles.BookShelfs}>

    <div className={styles.BookShelfs__shelf}>
      <h2>
        <img className={styles.BookShelfs__shelf__icon} src={currentlyReadingIcon} alt="currentlyReadingIcon" />
        Currently Reading
      </h2>
      <div className={`${styles.bookContaner}`}>
        {
          books.filter((book) => book.shelf === "currentlyReading").map((book) => (
            <BookDetails
              key={book.id}
              book={book}
              changeBookShelf={updateShelf}
            />
          ))
        }
      </div>
    </div>

    <div className={styles.BookShelfs__shelf}>
      <h2>
        <img className={styles.BookShelfs__shelf__icon} src={wantToReadIcon} alt="currentlyReadingIcon" />
        Want To Read
      </h2>
      <div className={styles.bookContaner}>
        {
          books.filter((book) => book.shelf === "wantToRead").map((book) => (
            <BookDetails
              key={book.id}
              book={book}
              changeBookShelf={updateShelf}
            />
          ))
        }
      </div>
    </div>

    <div className={styles.BookShelfs__shelf}>
      <h2>
        <img className={styles.BookShelfs__shelf__icon} src={readIcon} alt="currentlyReadingIcon" />
        Read
      </h2>
      <div className={`${styles.bookContaner}`}>
        {
          books.filter((book) => book.shelf === "read").map((book) => (
            <BookDetails
              key={book.id}
              book={book}
              changeBookShelf={updateShelf}
            />
          ))
        }
      </div>
    </div>
  </div>
);

BookShelfs.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      shelf: PropTypes.string
    })).isRequired,
  updateShelf: PropTypes.func
};

export default BookShelfs;

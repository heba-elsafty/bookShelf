import React from 'react';
import PropTypes from 'prop-types';
import styles from './bookDetails.module.scss';
import ChangeBookShelf from '../ChangeBookShelf/ChangeBookShelf';

import defaultBookImage from "../../assets/images/icons/default-book.svg"
import { Link } from 'react-router-dom';

const BookDetails = ({
  book,
  changeBookShelf
}) => (
  <div className='col-25'>
    <div className={styles.BookDetails}>
      <div className={`${styles.BookDetails__header}`}>
        <img src={book.imageLinks ? book.imageLinks.thumbnail : defaultBookImage} alt={`${book.title}-img`} />
        <ChangeBookShelf book={book} onChangeBookShelf={changeBookShelf} />
      </div>

      <div className={`${styles.BookDetails__body}`}>
        <Link to={`/books/${book.id}`} className={styles.BookDetails__link}>
          <h3>{book.title}</h3>
        </Link>
        {
          book.authors && book.authors.length > 0 ? (
            book.authors.map((author) => (
              <small key={author}>{author}</small>
            ))
          ) : null
        }
      </div>
    </div>
  </div>
);

BookDetails.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
  }),
  changeBookShelf: PropTypes.func
};


export default BookDetails;

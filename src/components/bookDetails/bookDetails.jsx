import React from 'react';
import PropTypes from 'prop-types';
import styles from './bookDetails.module.scss';
import ChangeBookShelf from '../ChangeBookShelf/ChangeBookShelf';

const BookDetails = ({
  book,
  changeBookShelf,
  isDefaultValueNone
}) => (
  <div className='col-25'>
    <div className={styles.BookDetails}>
      <div className={`${styles.BookDetails__header}`}>
        {book.imageLinks.smallThumbnail && <img src={book.imageLinks.smallThumbnail} alt={`${book.title}-img`} />}
        <ChangeBookShelf book={book} onChangeBookShelf={changeBookShelf} isNone={isDefaultValueNone} />
      </div>

      <div className={`${styles.BookDetails__body}`}>
        <h3>{book.title}</h3>
        {
          book.authors.map((author) => (
            <small key={author}>{author}</small>
          ))
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
  changeBookShelf: PropTypes.func,
  isDefaultValueNone: PropTypes.bool
};

BookDetails.defaultProps = {
  isDefaultValueNone: false
};

export default BookDetails;

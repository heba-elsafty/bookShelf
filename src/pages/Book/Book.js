import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//Api
import { getBook as getBookAPI } from "../../BooksAPI";

//image
import defaultBookImage from "../../assets/images/icons/default-book.svg"
import defaultuserImage from "../../assets/images/icons/user.svg"

import styles from './Book.module.scss';
import { useParams } from 'react-router-dom';

const Book = () => {
  const initBook = {
    id: "",
    title: "",
    imageLinks: {
      thumbnail: ""
    },
    authors: [],
    description: "",
    shelf: ""
  };

  const { id } = useParams();
  const [book, setBook] = useState(initBook);

  const getBook = () => {
    getBookAPI(id)
      .then((res) => {
        setBook(res)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <div className={styles.Book}>
      <div className={styles.Book__header}>
        <img src={book.imageLinks ? book.imageLinks.thumbnail : defaultBookImage} alt={`${book.title}-img`} />

      </div>

      <div className={styles.Book__details}>
        <h2 className={styles.Book__title}>{book.title}</h2>
        {/* If this book had a authors will display it */}
        {
          book.authors && book.authors.length > 0 ? (
            book.authors.map((author) => (
              <div key={author} className={styles.Book__author}>
                <img src={defaultuserImage} alt={`${author}-img`} />
                <h4>{author}</h4>
              </div>
            ))
          ) : null
        }

        <p className={styles.Book__description}>
          {book.description}
        </p>

        <ul className={styles.Book__info}>
          {
            book.categories && book.categories.length > 0 ? (
              <li>
                <strong>Category : </strong>
                {
                  book.categories.map((category) => (
                    <span className={styles.Book__info__tag}>{category}</span>
                  ))
                }
              </li>
            ) : null
          }
          <li>
            <strong>Shelf : </strong>
            <span className={`${styles.Book__info__tag} ${styles.Book__info__tagPrimary}`}>{book.shelf}</span>
          </li>
        </ul>

      </div>

    </div>
  );
}


Book.propTypes = {};

Book.defaultProps = {};

export default Book;

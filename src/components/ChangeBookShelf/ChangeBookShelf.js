import PropTypes from 'prop-types';
import styles from './ChangeBookShelf.module.scss';

const ChangeBookShelf = ({ book, onChangeBookShelf }) => {
  return (
    <div className={styles.ChangeBookShelf}>
      <select
        className={styles.ChangeBookShelf__select}
        onChange={(e) => onChangeBookShelf(book, e.target.value)}
        defaultValue={book.shelf}
      >
        <option disabled> move to...</option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead"> Want to read</option>
        <option value="read"> Read</option>
        <option value="none"> none</option>
      </select>
    </div >
  );
}

ChangeBookShelf.propTypes = {
  onChangeBookShelf: PropTypes.func,
  isNone: PropTypes.bool,
  book: PropTypes.shape({
    shelf: PropTypes.string
  })
};

export default ChangeBookShelf;

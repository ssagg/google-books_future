import { IMAGE_PLACEHOLDER } from "../../constants/constants";
import { Book } from "../../models/model";

import styles from "./BookCard.module.scss";

interface BookCardProps {
  onClick: () => void;
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <img
        className={styles.cover}
        alt='book cover'
        src={book.volumeInfo.imageLinks?.thumbnail || IMAGE_PLACEHOLDER}
      />
      <div className={styles.text}>
        <p>{book.volumeInfo.categories || null}</p>
        <h3>{book.volumeInfo.title}</h3>
        <p className={styles.authorsList}>
          {book.volumeInfo.authors?.join(" / ")}
        </p>
      </div>
    </div>
  );
};

export default BookCard;

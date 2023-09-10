import React from "react";

import BookDetails from "../../components/BookDetails/BookDetails";

import styles from "./BooksPage.module.scss";

const BookPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <BookDetails />
    </div>
  );
};

export default BookPage;

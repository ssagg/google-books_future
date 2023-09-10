import React from "react";
import BooksCounter from "../../components/BooksCounter/BooksCounter";

import styles from "./BooksPage.module.scss";
import BookCard from "../../components/BookCard/BookCard";
import { observer } from "mobx-react-lite";
import { bookStore } from "../../stores/BooksStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "@mantine/core";
import PaginationButton from "../../components/PaginationButton/PaginationButton";

const BooksPage: React.FC = observer(() => {
  const navigate = useNavigate();
  const { books, isLoading, isLoadingMore } = bookStore;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader className={styles.loader} />
      ) : (
        <>
          {books && <BooksCounter />}
          <section className={styles.cards}>
            {books?.items?.map((book) => {
              return (
                <BookCard
                  key={book.etag}
                  onClick={() => navigate(`/book/${book.id}`)}
                  book={book}
                />
              );
            })}
          </section>
          <div className={styles.loadersWrapper}>
            {books?.totalItems > 30 && <PaginationButton />}
            {isLoadingMore && <Loader />}
          </div>
        </>
      )}
    </div>
  );
});

export default BooksPage;

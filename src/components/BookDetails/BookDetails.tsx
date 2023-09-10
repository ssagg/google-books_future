import React, { useEffect } from "react";

import styles from "./Book.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { bookStore } from "../../stores/BooksStore";
import { Button, Loader } from "@mantine/core";

import { observer } from "mobx-react-lite";

const BookDetails: React.FC = observer(() => {
  const { book, getBook, isLoading } = bookStore;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBook(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <div className={styles.wrapper}>
            <div className={styles.coverWrapper}>
              <img
                className={styles.cover}
                alt='book cover'
                src={book?.volumeInfo?.imageLinks?.thumbnail}
              />
            </div>

            <div className={styles.text}>
              <p className={styles.category}>
                {book?.volumeInfo?.categories?.join(" / ")}
              </p>
              <h3>{book?.volumeInfo?.title}</h3>
              <p className={styles.author}>
                {book?.volumeInfo?.authors?.join(" / ")}
              </p>
              <p className={styles.description}>
                {book?.volumeInfo?.description}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default BookDetails;

import { observer } from "mobx-react-lite";
import React from "react";
import { bookStore } from "../../stores/BooksStore";

import styles from "./BooksCounter.module.scss";

const BooksCounter: React.FC = observer(() => {
  const { books } = bookStore;

  return (
    <div className={styles.counter}>
      We found {books?.totalItems} relevant results
    </div>
  );
});

export default BooksCounter;

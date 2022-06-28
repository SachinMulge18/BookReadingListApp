import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import styles from "./BookDetail.module.css";

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className={styles.title}>{book.title}</div>
      <div className={styles.auther}>{book.author}</div>
    </li>
  );
};

export default BookDetail;

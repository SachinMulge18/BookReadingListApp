import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import styles from "./navbar.module.css";

export const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className={styles.navbar}>
      <h1>Book Reading List.</h1>
      <p>You currently have {books.length} books to read.</p>
    </div>
  );
};

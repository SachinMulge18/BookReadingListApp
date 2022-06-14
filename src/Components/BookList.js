import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext'
import BookDetail from './BookDetail';
import styles from './BookList.module.css';

const BookList = () => {
    const {books} = useContext(BookContext);
  return books.length ? ( 
    <div className={styles.bookList}>
        <ul>
            { books.map(book => {
                return( <BookDetail book={book} key={book.id} />)
            })}
        </ul>
    </div>
  ) : (
    <div className={styles.empty}>
        <p> No Books To Read.</p>
    </div>
)
}



export default BookList;




















import React, { useContext,useState } from 'react';
import { BookContext } from '../Contexts/BookContext';
import styles from './NewBook.module.css';

export const NewBook = () => {
    const{ addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
        console.log(title, author)
    }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
            <input type='text' value={title} placeholder="Book Title " required  autoFocus
                onChange={(e) => {setTitle(e.target.value)}} />

            <input type='text' value={author} placeholder="Author" required 
                onChange={(e) => {setAuthor(e.target.value)}} />
           
            <input type='submit' value='Add Book' />
    </form>
    
  )
}

export default NewBook;

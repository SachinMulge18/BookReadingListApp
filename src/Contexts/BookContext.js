import React,{createContext, useState} from 'react';

export const BookContext = createContext();


const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
      {title: 'The Rich Dad Poor Dad.', author:'Robert Kiyosaki', id: 1 },
      {title: 'The Power Of Subconcius Mind.',author:'Joseph Murphy', id: 2 },
      {title: 'Think And Grow Rich',author:'Napoleon Hill', id: 3 }
    ])

  const addBook = (title, author) => {
    setBooks([...books, {title: title, author: author, id: Math.random()}])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }
  return(
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>

  )
}

export default BookContextProvider;
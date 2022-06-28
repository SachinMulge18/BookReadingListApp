import React from "react";
import BookList from "./Components/BookList";
import { NavBar } from "./Components/NavBar";
import NewBook from "./Components/NewBook";
import BookContextProvider from "./Contexts/BookContext";

export const App = () => {
  return (
    <>
      <div className="app">
        <BookContextProvider>
          <NavBar />
          <NewBook />
          <BookList />
        </BookContextProvider>
      </div>
    </>
  );
};

export default App;

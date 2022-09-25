import { Route, Routes } from "react-router-dom"

import BookSearch from "../pages/BookSearch/BookSearch";
import MyRead from "../pages/MyRead/MyRead";
import Book from "../pages/Book/Book";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MyRead />} />
      <Route path="/search" element={<BookSearch />} />
      <Route path="/books/:id" element={<Book />} />
    </Routes>
  )
}

export default Routing;
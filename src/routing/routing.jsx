import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookSearch from "../pages/bookSearch/bookSearch";
import MyRead from "../pages/MyRead/MyRead";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRead />} />
        <Route path="/search" element={<BookSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;
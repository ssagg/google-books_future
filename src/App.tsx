import { Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPage/BooksPage";
import BookPage from "./pages/BookPage/BookPage";
import Search from "./components/Search/Search";

const App: React.FC = () => {
  return (
    <>
      <Search />
      <Routes>
        <Route path='/' element={<BooksPage />}></Route>
        <Route path='/book/:id' element={<BookPage />}></Route>
      </Routes>
    </>
  );
};

export default App;

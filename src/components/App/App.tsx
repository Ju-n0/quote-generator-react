import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../Header/Header";
import RandomQuote from "../RandomQuote/RandomQuote";
import NotFound from "../NotFound/NotFound";
import AllCategories from "../AllCategories/AllCategories";
import CategoryPage from "../CategoryPage/CategoryPage";
import SearchAuthor from "../SearchAuthor/SearchAuthor";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/allcategories" element={<AllCategories />} />
        <Route path="/category/:slug" element={<CategoryPage />} />

        <Route path="/searchauthor" element={<SearchAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

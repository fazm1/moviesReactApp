import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// import MovieList from "./pages/MovieList";
// import MovieDetails from "./pages/MovieDetails";
// import NotFound from "./pages/NotFound";
// import Watchlist from "./pages/Watchlist";
// import Header from "./components/header";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, clicked2, unmark } from "./store/slices/counter";
import LanguageContext from "./context/language";

const MovieList = React.lazy(() => import("./pages/MovieList"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Watchlist = React.lazy(() => import("./pages/Watchlist"));
const Header = React.lazy(() => import("./components/header"));

function App() {
  const [favMovies, setFavMovies] = useState([]);
  const dispatch = useDispatch();
  const counterVal = useSelector((state) => state.counter.value);
  const clickedCards = useSelector((state) => state.counter.clickedId);
  const [language, setLanguage] = useState("en");

  const handleAddToFav = (id, title, image, date, clicked) => {
    dispatch(increment(counterVal + 1));
    dispatch(clicked2(id));
    setFavMovies([
      ...favMovies,
      {
        favId: Date.now().toString(36) + Math.random().toString(36).substr(2),
        id: id,
        original_title: title,
        poster_path: image,
        release_date: date,
      },
    ]);

  };
  const removeFromFav = (favID, id) => {
    dispatch(decrement(counterVal - 1));
    dispatch(unmark(id));
    const newArr = favMovies.filter((favMovie) => favMovie.favId !== favID);
    setFavMovies(newArr);
  };

  return (
    <>
      <BrowserRouter>
      <LanguageContext.Provider value={{ language, setLanguage }}>
      <div
          dir={language === "ar" ? "rtl" : "ltr"}
          className={language === "ar" ? "text-right" : "text-left"}
        >
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  handleAddToFav={handleAddToFav}
                  favMovies={favMovies}
                />
              }
            />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  favMovies={favMovies}
                  removeFromFav={removeFromFav}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </div>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

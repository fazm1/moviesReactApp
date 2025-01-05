import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Watchlist from "./pages/Watchlist";
import Header from "./components/header";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter";
function App() {
  const [favMovies, setFavMovies] = useState("");
  const dispatch = useDispatch();
  const counterVal = useSelector((state) => state.counter.value);

  const handleAddToFav = (id, title, image, date, clicked) => {
    dispatch(increment(counterVal + 1));
    setFavMovies([
      ...favMovies,
      {
        favId: Date.now().toString(36) + Math.random().toString(36).substr(2),
        id: id,
        original_title: title,
        poster_path: image,
        release_date: date,
        clicked: clicked
      },
    ]);
  };
  const removeFromFav = (favID) => {
    dispatch(decrement(counterVal - 1));
    const newArr = favMovies.filter((favMovie) => favMovie.favId !== favID);
    setFavMovies(newArr);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MovieList handleAddToFav={handleAddToFav} favMovies={favMovies}/>}
          />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route
            path="/watchlist"
            element={
              <Watchlist favMovies={favMovies} removeFromFav={removeFromFav} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

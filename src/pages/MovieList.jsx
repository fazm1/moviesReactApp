import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import axios from "axios";
import "./pages.css";

function MovieList(props) {
  const {handleAddToFav} = props;
  const [movies, setMovies] = useState();
  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_BASE_URL
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className = "listWrapper">
        {movies?.map((movie) => (
          <MovieCard 
            key={movie.id}
            movieItem={movie}
            handleAddToFav={handleAddToFav}
          />
        ))}
      </div>
    </>
  );
}

export default MovieList;

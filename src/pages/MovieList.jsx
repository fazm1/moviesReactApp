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
        "https://api.themoviedb.org/3/movie/popular?api_key=6592577093da51eb24594357289c921c"
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

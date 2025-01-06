import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import axios from "axios";
import LanguageContext from "../context/language";
import Search from "../components/search";

function MovieList(props) {
  const { handleAddToFav } = props;
  const [movies, setMovies] = useState();
  const { language } = useContext(LanguageContext);
  const [clear, setClear] = useState(false);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}&language=${language}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [clear, language]);

  const handleSearch = (name) => {
    const regex = new RegExp(name, "i");
    const newArr = movies.filter((movie) => regex.test(movie.title));
    if (newArr.length > 0) {
      setMovies(newArr);
    } else {
      setClear(!clear)
      setMovies(movies);
    }
    console.log(newArr);
    if (name === "") {
      setClear(!clear);
    }
  };
  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className="listWrapper">
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

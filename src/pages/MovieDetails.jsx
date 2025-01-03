import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./pages.css";
function MovieDetails() {
  const [movie, setMovie] = useState("");
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=6592577093da51eb24594357289c921c`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="MovieDetails">
        <img
          className="movimage"
          src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
        />
        <div className="movieDetails">
          <h1 className="movtitle">{movie.original_title}</h1>
          <br/>
          <span className="movReleaseDate">{movie.release_date}</span>
          <br/>
          <p className="desc">{movie.overview}</p>
          <br/>
          <span className="languages" style={{ fontWeight: "bold" }}>
            Languages: 
          </span>
          <span> {movie.original_language}</span>
          <br/>

          <img className="companies" src=""></img>
          <br/>
          <a href={movie.homepage}>Website</a>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

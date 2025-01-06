import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import LanguageContext from "../context/language";
function MovieDetails() {
  const [movie, setMovie] = useState("");
  const params = useParams();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL2}${params.id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${language}`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <>
      <div className="row">
        <div className="col">
          <img 
          className="mx-4 mt-4"
            src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
            width="350px"
            height="450px"
            style={{borderRadius: "10px"}}
          />
        </div>
        <div className="col-8 mt-4">
          <h1 className="movtitle">{movie.title}</h1>
          <br />
          <span className="movReleaseDate">{movie.release_date}</span>
          <br />
          <p className="desc">{movie.overview}</p>
          <br />
          <span className="languages" style={{ fontWeight: "bold" }}>
            {language === 'ar' ? "اللغات: " : "Languages:"}
          </span>
          <span style={{fontWeight: "bolder"}}> {movie.original_language}</span>
          <br />

          <img className="companies" src=""></img>
          <br />
          <a href={movie.homepage}>{language === 'ar' ? "الموقع" : "Website"}</a>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

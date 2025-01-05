import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function MovieCard(props) {
  const { movieItem, handleAddToFav } = props;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/moviedetails/${id}`);
  };

  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="movieCard" key={movieItem.id}>
        <img
          onClick={() => handleClick(movieItem.id)}
          src={"https://image.tmdb.org/t/p/w1280" + movieItem.poster_path}
          className="movieImage"
        />
        <div className="cardContent">
          <span className="movieTitle">{movieItem.original_title}</span> <br />
          <span className="movieDate">{movieItem.release_date}</span>
          <span
            className="addToFav"
            onClick={() => {
              setClicked(true);
              handleAddToFav(
                movieItem.id,
                movieItem.original_title,
                movieItem.poster_path,
                movieItem.release_date,
                clicked
              );
            }}
          >
            <img
              src={
                clicked
                  ? "src/assets/heart-solid.svg"
                  : "src/assets/heart-regular.svg"
              }
              width="20px"
              height="20px"
            ></img>
          </span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

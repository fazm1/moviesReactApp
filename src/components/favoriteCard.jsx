import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";


function FavoriteCard(props) {
  const { movieItem, removeFromFav } = props;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/moviedetails/${id}`);
  };
  
  return (
    <>
      <div className="movieCard" key={movieItem.favId}>
        <img
          onClick={() => handleClick(movieItem.id)}
          src={"https://image.tmdb.org/t/p/w1280" + movieItem.poster_path}
          className="movieImage"
        />
        <div className="cardContent">
          <span className="movieTitle">{movieItem.original_title}</span> <br />
          <span className="movieDate">{movieItem.release_date}</span>
          <span className="addToFav" onClick={() => removeFromFav(movieItem.favId, movieItem.id)}>
            <img
              src="src/assets/heart-solid.svg"
              width="20px"
              height="20px"
            ></img>
          </span>
        </div>
      </div>
    </>
  );
}

export default FavoriteCard;

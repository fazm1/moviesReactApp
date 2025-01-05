import { useNavigate } from "react-router";

function MovieCard(props) {
    const { movieItem } = props;
    const navigate = useNavigate();
    const handleClick = (id) =>{
        navigate(`/moviedetails/${id}`);
    }
  return (
    <>
      <div onClick={()=>handleClick(movieItem.id)} className="movieCard" key={movieItem.id}>
        <img src={"https://image.tmdb.org/t/p/w1280"+movieItem.poster_path} className="movieImage" />
        <div className="cardContent">
            <span className="movieTitle">{movieItem.original_title}</span> <br />
            <span className="movieDate">{movieItem.release_date}</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

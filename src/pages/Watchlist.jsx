import { useState } from "react";
import MovieCard from "../components/movieCard"
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices/counter";
import FavoriteCard from "../components/favoriteCard";
function Watchlist(props) {
const {favMovies, removeFromFav} = props;

  return (
    <>
      <h1>Watch list </h1>
      {favMovies?.map((favMovie) => (
          <FavoriteCard 
            key={favMovie.favId}
            movieItem={favMovie}
            removeFromFav={removeFromFav}
          />
        ))}
      
    </>
  )
}

export default Watchlist

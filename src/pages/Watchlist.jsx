import { useContext, useState } from "react";
import MovieCard from "../components/movieCard"
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices/counter";
import FavoriteCard from "../components/favoriteCard";
import LanguageContext from "../context/language";
function Watchlist(props) {
const {favMovies, removeFromFav} = props;
const {language} = useContext(LanguageContext);
  return (
    <>
      <h1 className="mx-5 mt-5">{language === 'ar' ? "المفضلة":"Watch List"}  </h1>
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

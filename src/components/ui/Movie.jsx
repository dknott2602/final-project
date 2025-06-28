import React from "react";
import { Link } from "react-router-dom";

const Movie = () => {

    return (
        <div className="movie">
            <Link to={`/movie/${movie.id}`}>
            <figure className="movie__img--wrapper">
                <img src={movie.Poster} alt="" className="movie__img"/>
            </figure>
            </Link>
            <div className="movie__title">
                <Link to={`/movie/${movie.id}`} className="">
                {movie.tilte}
                </Link>
            </div>
            <div className="movie__year">
                {movie.year}
            </div>
        </div>
    )
}

export default Movie
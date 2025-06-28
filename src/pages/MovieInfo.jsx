import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieInfo = () => {
    const {id} = useParams()
    const movie = movie.find(movie => +movie.id === +id)

  return (
    <div className="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="movie__selected--title--top">Movies</h2>
              </Link>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img
                  src={movie.imdbID}
                  alt=""
                  className="movie__selcted--img"
                />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">
                {movie.Title}
                </h2>
              </div>
              <div className="movie__selected--year">{movie.Year}</div>
              <div className="movie__summary">
                <h3 className="movie__summary--title">Summary</h3>
                <p className="movie__suumary--para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium illum autem porro, repellendus sunt voluptatem ut
                  est assumenda quibusdam, culpa consequuntur rem veritatis
                  maiores sequi dolorum iusto nesciunt debitis sed.
                </p>
                <p className="movie__suumary--para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium illum autem porro, repellendus sunt voluptatem ut
                  est assumenda quibusdam, culpa consequuntur rem veritatis
                  maiores sequi dolorum iusto nesciunt debitis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieInfo;

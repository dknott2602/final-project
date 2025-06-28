import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("DEFAULT");
  const [localSearchTerm, setLocalSearchTerm] = useState(""); 
  const location = useLocation();

  
  async function fetchAndRenderMovies(searchQuery, filterValue) {
    if (!searchQuery.trim()) { 
      setMovies([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=8855abea&s=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      let moviesData = data.Search;

      if (moviesData) {
        if (!Array.isArray(moviesData)) {
            moviesData = [moviesData];
        }

        if (filterValue === "A_Z") {
          moviesData.sort((a, b) => a.Title.localeCompare(b.Title));
        } else if (filterValue === "Z_A") {
          moviesData.sort((a, b) => b.Title.localeCompare(a.Title));
        } else if (filterValue === "YEAR") {
          moviesData.sort((a, b) => Number(b.Year) - Number(a.Year));
        }
        setMovies(moviesData);
      } else {
        setMovies([]); 
      }
    } catch (e) {
      setError(e.message);
      setMovies([]); 
    } finally {
      setLoading(false);
    }
  }

  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchTermFromURL = queryParams.get('query'); 
    const currentFilterFromURL = queryParams.get('filter') || "DEFAULT"; 

    if (searchTermFromURL) {
      setLocalSearchTerm(searchTermFromURL); 
      fetchAndRenderMovies(searchTermFromURL, currentFilterFromURL);
    } else if (localSearchTerm) {
      fetchAndRenderMovies(localSearchTerm, currentFilterFromURL);
    } else {
        setMovies([]);
        setLoading(false);
        setError(null);
    }

    setCurrentFilter(currentFilterFromURL);

  }, [location.search]); 

  const handleLocalSearchChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };

  
  const handleLocalSearchSubmit = () => {
    fetchAndRenderMovies(localSearchTerm, currentFilter);
  };

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setCurrentFilter(newFilter);
    fetchAndRenderMovies(localSearchTerm, newFilter);
  };

  return (
    <div id="movies__body">
      <main id="movies__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="movies__header">
                <h2 className="section__title movies__header--title">
                  All <span className="yellow">Movies</span>
                </h2>
                <select
                  id="filter"
                  value={currentFilter}
                  onChange={handleFilterChange}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="A_Z">A-Z</option>
                  <option value="Z_A">Z-A</option>
                  <option value="YEAR">Year</option>
                </select>
              </div>
              <div className="input__wrap">
                <input
                  type="text"
                  placeholder="Search By Title or Keyword"
                  value={localSearchTerm}
                  onChange={handleLocalSearchChange}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handleLocalSearchSubmit();
                    }
                  }}
                />
                <div className="search__wrapper" onClick={handleLocalSearchSubmit}>
                  <FontAwesomeIcon icon="magnifying-glass" />
                </div>
              </div>

              {loading ? (
                <div className="movies">Loading movies...</div>
              ) : error ? (
                <div className="movies">Error: {error}</div>
              ) : movies.length > 0 ? (
                <div className="movies">
                  {movies.map((movie) => (
                    <Link
                      style={{ width: "25%" }}
                      key={movie.imdbID}
                      to={`/movies/${movie.imdbID}`}
                    >
                      <div className="movie">
                        <figure className="movie__img--wrapper">
                          <img
                            className="movie__img"
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
                            alt={movie.Title}
                          />
                        </figure>
                        <div className="movie__title">{movie.Title}</div>
                        <div className="movie__year">{movie.Year}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="movies no-movies">No movies found.</div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
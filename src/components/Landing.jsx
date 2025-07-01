
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import OMBDImage from "../Assets/OMBD.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      navigate(`/movies?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <section id="landing">
      <header>
        <div className="container">
          <div className="content__wrapper">
            <h1>America's largest online movie platform</h1>
            <h2>
              Find your favorite movie with <span className="yellow">IMDb</span>
            </h2>
            <div className="input__wrap">
              <input
                type="text"
                placeholder="Search By Title or Keyword"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleSearchSubmit();
                  }
                }}
                />
              <div className="search__wrapper" onClick={handleSearchSubmit}> {/* Add onClick to the search icon */}
                <FontAwesomeIcon icon="magnifying-glass" />
              </div>
            </div>
          </div>
        </div>
        <figure className="header__img">
          <img src={OMBDImage} className="header__img--logo" alt="" />
        </figure>
      </header>
    </section>
  );
};

export default Landing;
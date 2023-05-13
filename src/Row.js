import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";

function Row({ title, fetchUrl, isLargRow = false }) {
  const base_Url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      axios
        .get(`https://api.themoviedb.org/3${fetchUrl}`)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, [fetchUrl]);

  //   console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargRow && movie.poster_path) ||
              (!isLargRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargRow && "row_posterLarger"}`}
                key={movie.id}
                src={`${base_Url}${
                  isLargRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;

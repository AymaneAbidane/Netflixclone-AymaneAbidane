import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "./Requests";
const Banner = () => {
  const randomnumber = Math.floor(Math.random() * 20);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      axios
        .get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
        .then((response) => {
          setMovie(response.data.results[randomnumber]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);
  // console.log(movie);
  function truncate(string, n) {
    return string?.lenght > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;

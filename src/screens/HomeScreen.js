import React from "react";
import "./Homescreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";
export default function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Netflixe Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargRow
      />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DOCUMENTERIS" fetchUrl={requests.fetchDocumentries} />
      <Row title="HORRORE MOVIES" fetchUrl={requests.fetchHorroreMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

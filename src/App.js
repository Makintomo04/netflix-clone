import React from "react";
import "./App.css";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        fetchGenres={requests.fetchGenres}
        fetchMovieGenres={requests.fetchMovieGenres}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        fetchGenres={requests.fetchGenres}
        fetchMovies={requests.fetchMovieGenres}
      />
      <Footer />
    </div>
  );
}

export default App;

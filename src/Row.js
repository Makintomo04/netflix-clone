import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"; //base url for images

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`row ${isLargeRow && "row__shift"}`}>
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <div className="poster__wrapper">
              {movie.backdrop_path != null && (
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie?.title || movie?.name || movie?.original_name}
                />
              )}
              <div className="poster__desc">
                <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
                <p>Action - Drama</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Row;

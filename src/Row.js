import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"; //base url for images

const Row = ({
  title,
  fetchUrl,
  isLargeRow,
  fetchGenres,
  fetchMovieGenres,
}) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviegenres, setMovieGenres] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchGenres);
      setGenres(request.data.genres);

      return request;
    }

    fetchData();
  }, [fetchGenres]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchMovieGenres);
      setMovieGenres(request.data.genres);
      return request;
    }
    fetchData();
  }, [fetchMovieGenres]);

  let movieGenreArray = moviegenres.map((mGenre) => {
    return mGenre;
  });
  let showGenreArray = genres.map((sGenre) => {
    return sGenre;
  });
  console.log("cheeese", showGenreArray);
  const genreArray = movieGenreArray.concat(showGenreArray);

  const opts = {
    height: "390",
    width: "97%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log("logging", movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="rows">
      {console.log("BOy", genreArray)}
      <div className={`row ${isLargeRow && "row__shift"}`}>
        <h2 className="row__title">{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <>
              <div className="poster__wrapper">
                {console.log(movies)}
                {movie.backdrop_path != null && (
                  <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie?.title || movie?.name || movie?.original_name}
                  />
                )}
                <div className="poster__desc">
                  <i class="fas fa-play-circle"></i>
                  <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
                  <div className="genres">
                    {movie.genre_ids.map((id) => {
                      console.log(movies, id);
                      return genreArray.map(
                        (genre) =>
                          genre?.id === id && console.log("test2", genreArray)
                      );
                    })}

                    {/* {movie.genre_ids.map((id) =>
                      genres.map(
                        (genre) => genre.id === id && <p>{`${genre.name} ·`}</p>
                      )
                    )}
                    {movie.genre_ids.map((id) =>
                      movieGenres.map(
                        (movieGenre) =>
                          movieGenre.id === id && (
                            <p>{`${movieGenre.name} ·`}</p>
                          )
                      )
                    )} */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {trailerUrl && (
          <Youtube className="trailer" videoId={trailerUrl} opts={opts} />
        )}
      </div>
    </div>
  );
};
export default Row;

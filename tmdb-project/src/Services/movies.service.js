import { token } from "../Auth/Auth";
import axios from "axios";

const apiUrl = "https://api.themoviedb.org";

export const getMoviesPlayingService = async () => {
  try {
    const response = await axios.get(`${apiUrl}/3/movie/now_playing`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { playingMoviesList: response.data.results, promise: true };
  } catch (error) {
    return { playingMoviesList: [], promise: false };
  }
};

export const getMoviesByNameService = async (name) => {
  try {
    const response = await axios.get(
      `${apiUrl}/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      title: response.data.results[0].original_title,
      synopsis: response.data.results[0].overview,
      banner:
        "https://image.tmdb.org/t/p/original" +
        response.data.results[0].poster_path,
      background:
        "https://image.tmdb.org/t/p/original" +
        response.data.results[0].backdrop_path,
      review: response.data.results[0].vote_average,
      parentalRating: response.data.results[0].adult,
      releaseDate: response.data.results[0].release_date,
      movieId: response.data.results[0].id,
      promise: true,
    };
  } catch (error) {
    return {
      title: "",
      synopsis: "",
      banner: "",
      background: "",
      review: "",
      parentalRating: false,
      releaseDate: "",
      movieId: "",
      promise: false,
    };
  }
};

export const setMovieToMyWatchlistService = async (tmdbId, movieId) => {
  try {
    const response = await axios.post(
      `${apiUrl}/3/account/${tmdbId}/watchlist`,
      { media_type: "movie", media_id: movieId, watchlist: "true" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      message: "Movie added to your watchlist successfully!",
      promise: true,
    };
  } catch (error) {
    return {
      message: "Movie added error. Check your TMDB ID and try again!",
      promise: false,
    };
  }
};

import axios from "axios";

const API_KEY = "0e8da5a2801ded4390fdad0a35851f66";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return data.results;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return data.results;
};

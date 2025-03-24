import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

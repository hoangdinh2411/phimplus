import { useMovieContext } from '~/provider/MovieContextProvider';

export default function useMovie() {
  const movieContext = useMovieContext();
  const { movie } = movieContext;
  return {
    movie,
  };
}

/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovieResponse, castResponse] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovieResponse);
    setCast(castResponse);

    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
    // Method
    loadMovie,
  };
};

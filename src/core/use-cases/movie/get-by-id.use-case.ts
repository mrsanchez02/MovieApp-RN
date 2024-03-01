import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {FullMovieDB} from '../../../infrastructure/interfaces/fullMovieDB.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const rawMovie = await fetcher.get<FullMovieDB>(`/${movieId}`);
    return MovieMapper.fromMovieDBToEntity(rawMovie);
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};

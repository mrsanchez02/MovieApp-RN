import React from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({movies, height = 440}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies &&
          movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)}
      </ScrollView>
    </View>
  );
};

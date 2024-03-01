/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Main Carousel */}
        <PosterCarousel movies={nowPlaying} />
        {/* Popular Movies */}
        <HorizontalCarousel
          movies={popular}
          title="Trending"
          loeadNextPage={popularNextPage}
        />
        {/* TopRated Movies */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />
        {/* Popular Movies */}
        <HorizontalCarousel movies={upcoming} title="Coming soon" />
      </View>
    </ScrollView>
  );
};

import React from 'react';
import MovieCard from './MovieCard';
import FeaturedMovie from './FeaturedMovie'
import TrendingSection from './TrendingSection';
import NewReleaseMovie from './NewReleaseMovie';
import NewSeriesRelease from './NewSeriesRelease';
import Recommended from './Recommended';
import Devcent from './Devcent';

const HomePage = () => {
  return (
    <div>
      <MovieCard />
      <FeaturedMovie />
      <TrendingSection />
      <NewReleaseMovie />
      <NewSeriesRelease />
      <Recommended />
      <Devcent />

      
    </div>
  );
};

export default HomePage;

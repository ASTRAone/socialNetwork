import React from 'react';
import {Svg, Path, G, Circle} from 'react-native-svg';

export const Movie = () => {
  return (
    <Svg width="43" height="43" viewBox="0 0 32 32" x="0px" y="0px" viewBox="0 0 48 48">
      <Path fill="#3F51B5" d="M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z" />
      <Circle fill="#90A4AE" cx="24" cy="24" r="19" />
      <Circle fill="#37474F" cx="24" cy="24" r="2" />
      <G>
        <Circle fill="#253278" cx="24" cy="14" r="5" />
        <Circle fill="#253278" cx="24" cy="34" r="5" />
        <Circle fill="#253278" cx="34" cy="24" r="5" />
        <Circle fill="#253278" cx="14" cy="24" r="5" />
      </G>
    </Svg>
  );
};

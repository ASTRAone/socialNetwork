import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

export const SpaceShip = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 30 30">
      <Path
        fill="#2B4099"
        d="M28,13.5l1-1.5h-1h-1h-1l1,1.5V22h-1v1h-5v-1h-2L17,5h-2l-2,17h-2v1H6v-1H5v-8.5L6,12H5H4H3  l1,1.5V22H3v6h3v-0.714l5,1.429V31h3v-2h4v2h3v-2.286l5-1.429V28h3v-6h-1V13.5z M4,27v-4h1v4H4z M6,26.246V24h5v3.674L6,26.246z   M13,30h-1v-7h1V30z M14,28v-4.945L15.895,6h0.21l1.887,17.02L17.999,28H14z M20,30h-1v-7h1V30z M21,27.674V24h5v2.246L21,27.674z   M28,27h-1v-4h1V27z"
      />
      <Path
        fill="#CC2954"
        d="M17,18v1h-2v-1H17L17,18z M17,20h-2v1h2V20L17,20z M28,1h-1v6h1V1z M28,8h-1v1h1V8z M5,3H4  v6h1V3z M5,10H4v1h1V10z"
      />
    </Svg>
  );
};

import React from 'react';
import * as Icons from './Icons';

const Icon = ({ className, glyph, width = 17, height = 17 }) => (
  <svg className={className} width={width} height={height}>
    <use xlinkHref={Icons[glyph]} />
  </svg>
);

export default Icon;

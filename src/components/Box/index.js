import React from 'react';
import './style.css';

export const ORIGINAL_SIZE = 200;

export default function Box({ bottom, left = 20, size = ORIGINAL_SIZE }) {
  const realBottom = Number.isNaN(+bottom) ? bottom : `${bottom}px`;
  const realLeft = Number.isNaN(+left) ? left : `${left}px`;
  return (
    <div
      className="box"
      style={{
        bottom: realBottom,
        left: realLeft,
        transform: `scale(${size / ORIGINAL_SIZE})`,
      }}
    />
  );
}

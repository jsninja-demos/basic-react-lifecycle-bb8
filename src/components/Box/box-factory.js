import { GROUND_HEIGHT } from '../Battlefront';

export const INITIAL_LEFT = window.innerWidth;

export default function create(size, droidHeight, isTop = false) {
  const bottom =
    (isTop ? GROUND_HEIGHT + droidHeight : GROUND_HEIGHT) - size * 0.81;
  return {
    id: Math.random(),
    bottom,
    size,
    left: INITIAL_LEFT,
    isTop,
  };
}

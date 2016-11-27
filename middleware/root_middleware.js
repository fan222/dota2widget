import { applyMiddleware } from 'redux';

import GamesMiddleware from './games_middleware';
import HerosMiddleware from './heros_middleware';

const RootMiddleware = applyMiddleware(
  GamesMiddleware,
  HerosMiddleware
);

export default RootMiddleware;

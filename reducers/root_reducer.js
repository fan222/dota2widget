import {combineReducers} from 'redux';

import GamesReducer from './games_reducer';
import HerosReducer from './heros_reducer';
import FavoritesReducer from './favorites_reducer';

const RootReducer = combineReducers({
  games: GamesReducer,
  heros: HerosReducer,
  favorites: FavoritesReducer
});

export default RootReducer;

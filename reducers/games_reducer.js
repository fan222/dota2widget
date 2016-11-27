import { RECEIVE_ALL_GAMES_ROOMS, RECEIVE_SINGLE_GAME_ROOM }
from '../actions/games_actions';
import merge from 'lodash/merge';

const _defaultGames = {

};

const GamesReducer = (state = _defaultGames, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_GAMES_ROOMS:
        return merge({}, );
      case RECEIVE_SINGLE_GAME_ROOM:
        return merge({}, state, {

        });
      default:
        return state;
    }
};

export default GamesReducer;

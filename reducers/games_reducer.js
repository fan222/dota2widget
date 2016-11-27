import { RECEIVE_ALL_GAMES_ROOMS, RECEIVE_SINGLE_GAME_ROOM }
from '../actions/games_actions';
import merge from 'lodash/merge';

const _defaultGames = {
  allRooms: [],
  roomsDetails: {}
};

const GamesReducer = (state = _defaultGames, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_GAMES_ROOMS:
        return merge({}, state, {allRooms: action.rooms.data});
      case RECEIVE_SINGLE_GAME_ROOM:
        return merge({}, state, {
          roomsDetails: {[action.room.data.room_id]: action.room.data}
        });
      default:
        return state;
    }
};

export default GamesReducer;

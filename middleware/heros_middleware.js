import {  fetchAllGamesRooms, fetchSingleGameRoom }
          from '../util/games_api_util';
import {  FETCH_ALL_GAMES_ROOMS, FETCH_SINGLE_GAME_ROOM,
          receiveAllGamesRooms, receiveSingleGameRoom}
          from '../actions/games_actions';

export default ({dispatch}) => next => action => {
  const fetchAllSuccess = rooms => dispatch(receiveAllGamesRooms(rooms));
  const fetchSingleSuccess = room => dispatch(receiveSingleGameRoom(room));

  switch (action.type) {
    case FETCH_ALL_GAMES_ROOMS:
      fetchAllGamesRooms(fetchAllSuccess);
      return next(action);
    case FETCH_SINGLE_GAME_ROOM:
      fetchSingleGameRoom(action.id, fetchSingleSuccess);
      return next(action);
    default:
      return next(action);
  }
};

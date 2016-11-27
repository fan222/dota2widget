export const FETCH_ALL_GAMES_ROOMS = "FETCH_ALL_GAMES_ROOMS";
export const FETCH_SINGLE_GAME_ROOM = "FETCH_SINGLE_GAME_ROOM";

export const fetchAllGamesRooms = () => ({
  type: FETCH_ALL_GAMES_ROOMS
});

export const fetchSingleGameRoom = () => ({
  type: FETCH_SINGLE_GAME_ROOM
});

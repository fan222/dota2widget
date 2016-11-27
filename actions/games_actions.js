export const FETCH_ALL_GAMES_ROOMS = "FETCH_ALL_GAMES_ROOMS";
export const FETCH_SINGLE_GAME_ROOM = "FETCH_SINGLE_GAME_ROOM";
export const RECEIVE_ALL_GAMES_ROOMS = "RECEIVE_ALL_GAMES_ROOMS";
export const RECEIVE_SINGLE_GAME_ROOM = "RECEIVE_SINGLE_GAME_ROOM";

export const fetchAllGamesRooms = () => ({
  type: FETCH_ALL_GAMES_ROOMS
});

export const fetchSingleGameRoom = () => ({
  type: FETCH_SINGLE_GAME_ROOM
});

export const receiveAllGamesRooms = (rooms) => ({
  type: RECEIVE_ALL_GAMES_ROOMS,
  rooms: rooms
});

export const receiveSingleGameRoom = (room) => ({
  type: RECEIVE_SINGLE_GAME_ROOM,
  room: room
});

export const fetchAllGamesRooms = (success) => {
  $.ajax({
    method: "GET",
    url: "http://open.douyucdn.cn/api/RoomApi/live/dota2",
    data: {limit: 99},
    success
  });
};

export const fetchSingleGameRoom = (id, success) => {
  $.ajax({
    method: "GET",
    url: `http://open.douyucdn.cn/api/RoomApi/room/${id}`,
    success
  });
};

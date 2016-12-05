# dota2widget

data2widget is a new-tab chrome extension that allow dota2 users to quickly search and compare dota2 heroes. It also allows users to search and add favorites streams on Douyu, a popular Chinese live stream website. User will also receive alerts when they're live.

![shot] [screenshot]

[screenshot]: ./docs/screen.png

## Features

* Check online Douyu Dota2 streams.
  * current viewer number
  * streams names
  * room owner's name
  * link to original website, Douyu
* Add favorite streams.
  * current status, online / offline
  * room owner's weight
  * number of follows
* Check Dota2 heroes attributes
  * base strength
  * strength gain
  * etc..

## Api Calls

* This app users public apis from Douyu for game streams and JankDota Hero Stats API form heroes attributes.

### fetch streams informations
```javascript
export const fetchAllGamesRooms = (success) => {
  $.ajax({
    method: "GET",
    url: "http://open.douyucdn.cn/api/RoomApi/live/dota2",
    data: {limit: 66},
    success
  });
};
```
### fetch heroes attributes.
```javascript
export const fetchAllHerosData = (success) => {
  $.ajax({
    method: "GET",
    url: "http://api.herostats.io/heroes/all",
    success
  });
};
```

## TODOS

- [ ] Integrate more game streams website's apis.
- [ ] Add alerts feature, so that users get noticed when their favorite streams are online.

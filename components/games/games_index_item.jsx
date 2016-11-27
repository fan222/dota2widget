import React from 'react';

const GamesIndexItem = ({room}) => (
  <div className="games-index-item">
    <div className="clearfix item-header">
      <img className="item-avatar" src={room.avatar_small} alt={room.nickname}/>
      <div className="item-nickname">{room.nickname}</div>
      <div className="item-online">{room.online}</div>
      <img className="item-fire" src="http://res.cloudinary.com/cloudfan/image/upload/v1480288782/fire_m90144.png" alt={room.nickname}/>
    </div>
    <div className="item-url"><a target="_blank"
          href={room.url}>Visit Douyu</a></div>
    <div className="item-roomname">{room.room_name}</div>
    <img className="item-src" src={room.room_src} alt={room.nickname}/>
  </div>
);

export default GamesIndexItem;

import React from 'react';
import GameIndexDetail from './games_index_detail';

const FavoritesIndexDetail = ({room, url}) => {
  if(!room) {
    return (<div className="games-index-detail" />);
  } else {
    return (
      <div className="games-index-detail">
        <div className="detail-ownername">{room.owner_name}</div>
        <div className="detail-ownerweight">{room.owner_weight}</div>
        <img className="detail-avatar" src={room.avatar} alt={room.owner_name}/>
        <div className="detail-online">{room.online}</div>
        <div className="detail-status">{room.room_status}</div>
        <div className="detail-fansnum">{room.fans_num}</div>
        <div className="detail-roomname">{room.room_name}</div>
        <div className="detail-link"><a target="_blank" href={url}>Visit Douyu</a></div>
        <img className="detail-thumb" src={room.room_thumb}
                                      alt={room.owner_name}/>
      </div>
    );
  }
};

export default FavoritesIndexDetail;

<GameIndexDetail
  room={this.props.roomsDetails[this.state.room_id]}
  url={this.state.url}/>

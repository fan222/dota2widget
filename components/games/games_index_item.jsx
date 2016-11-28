import React from 'react';
import Liked from 'react-icons/lib/fa/heart';
import Unliked from 'react-icons/lib/fa/heart-o';


class GamesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  favoriteButton (id) {
    id = parseInt(id);
    let button = <Unliked />;
      if (this.props.favorites.includes(id)) {
        button = <Liked />;
      }
    return button;
  }

  handleClick (id) {
    return (e) => {
      id = parseInt(id);
      if (this.props.favorites.includes(id)) {
        this.props.deleteFavorite(id);
      } else {
        this.props.addFavorite(id);
      }
    };
  }

  render() {
    return (
      <div className="games-index-item">
        <div className="clearfix item-header">
          <img  className="item-avatar"
            src={this.props.room.avatar_small} alt={this.props.room.nickname}/>
          <div className="item-nickname">{this.props.room.nickname}</div>
          <div className="item-favorite" onClick={this.handleClick(this.props.room.room_id)}>
            {this.favoriteButton(this.props.room.room_id)}
          </div>
          <div className="item-online">{this.props.room.online}</div>
          <img  className="item-fire"
            src="http://res.cloudinary.com/cloudfan/image/upload/v1480288782/fire_m90144.png"
            alt={this.props.room.nickname}/>
        </div>
        <div className="item-url"><a target="_blank"
          href={this.props.room.url}>Visit Douyu</a></div>
        <div className="item-roomname">{this.props.room.room_name}</div>
        <img className="item-src" src={this.props.room.room_src} alt={this.props.room.nickname}/>
      </div>
    );
  }
}

export default GamesIndexItem;

import React from 'react';
import Liked from 'react-icons/lib/fa/heart';
import Unliked from 'react-icons/lib/fa/heart-o';

class FavoritesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleGameRoom(this.props.id);
  }

  favoriteButton (id) {
    let button = <Liked />;
    return button;
  }

  handleClick (id) {
    return (e) => {
      id = parseInt(id);
        this.props.deleteFavorite(id);
    };
  }

  status (status) {
    let sta = parseInt(status);
    if (sta === 1) {
      return (<div>online</div>);
    } else {
      return (<div>offline</div>);
    }
  }

  render() {
    let room = this.props.roomsDetails[this.props.id];
    if (!room) {
      return (<div className="favorites-index-item" />);
    } else {
      return (
        <div className="favorites-index-item">
          <div className="clearfix favorites-header">
            <img  className="favorites-avatar"
              src={room.avatar} alt={room.owner_name}/>
            <div className="favorites-name">{room.owner_name}</div>
            <div className="favorites-favorite" onClick={this.handleClick(room.room_id)}>
              {this.favoriteButton(room.room_id)}
            </div>
            <div className="favorites-online">{room.online}</div>
            <img  className="favorites-fire"
              src="http://res.cloudinary.com/cloudfan/image/upload/v1480288782/fire_m90144.png"
              alt={room.owner_name}/>
          </div>
          <div className="clearfix favorites-subheader">
            <div className="weight">{room.owner_weight}</div>
            <div className="status">
              {this.status(room.room_status)}
            </div>
            <div className="fansnum">{room.fans_num} followed</div>
          </div>
          <div className="favorites-url"><a target="_blank"
            href={"http://www.douyu.com/"+room.room_id}>Visit Douyu</a></div>
          <div className="favorites-roomname">{room.room_name}</div>
          <img className="favorites-src" src={room.room_thumb} alt={room.owner_name}/>
        </div>);
    }
  }
}
export default FavoritesIndexItem;

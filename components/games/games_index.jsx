import React from 'react';
import GamesIndexItem from './games_index_item';


class GameIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllGamesRooms();
  }

  render() {
      if (this.props.allRooms.length === 0) {
        return (<div className="games-index"></div>);
      } else {
        return (
          <div className="games-index clearfix">
            <ul className="games-ul">
              {this.props.allRooms.map(room =>
                <li className="games-li" key={room.room_id}>
                  <GamesIndexItem room={room} favorites={this.props.favorites}
                                  addFavorite={this.props.addFavorite}
                                  deleteFavorite={this.props.deleteFavorite}/>
                </li>
                )
              }
            </ul>
          </div>);
      }
    }
}

export default GameIndex;

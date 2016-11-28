import React from 'react';
import FavoritesIndexItem from './favorites_index_item';

class FavoriteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="favorites-index clearfix">
        <ul className="favorites-ul">
          {this.props.favorites.map(id =>
            <li className="favorites-li" key={id}>
              <FavoritesIndexItem id={id}
                      roomsDetails={this.props.roomsDetails}
                      fetchSingleGameRoom={this.props.fetchSingleGameRoom}
                      addFavorite={this.props.addFavorite}
                      deleteFavorite={this.props.deleteFavorite}/>
            </li>
            )
          }
        </ul>
      </div>);
  }
}

export default FavoriteIndex;

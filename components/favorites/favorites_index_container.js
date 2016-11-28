import { connect } from 'react-redux';
import FavoriteIndex from './favorites_index';
import {  fetchSingleGameRoom }
          from '../../actions/games_actions';
import {  addFavorite, deleteFavorite }
          from '../../actions/favorites_actions';

const mapStateToProps = (state) => ({
  favorites: state.favorites.ids,
  roomsDetails: state.games.roomsDetails
});


const mapDispatchToProps = (dispatch) => ({
  fetchSingleGameRoom: (id) => dispatch(fetchSingleGameRoom(id)),
  addFavorite: (id) => dispatch(addFavorite(id)),
  deleteFavorite: (id) => dispatch(deleteFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIndex);

import { connect } from 'react-redux';
import GameIndex from './games_index';
import {  fetchAllGamesRooms }
          from '../../actions/games_actions';
import {  addFavorite, deleteFavorite }
          from '../../actions/favorites_actions';


const mapStateToProps = (state) => ({
  allRooms: state.games.allRooms,
  favorites: state.favorites.ids
});


const mapDispatchToProps = (dispatch) => ({
  fetchAllGamesRooms: () => dispatch(fetchAllGamesRooms()),
  addFavorite: (id) => dispatch(addFavorite(id)),
  deleteFavorite: (id) => dispatch(deleteFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameIndex);

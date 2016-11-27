import { connect } from 'react-redux';
import GameIndex from './games_index';
import {  fetchAllGamesRooms, fetchSingleGameRoom }
          from '../../actions/games_actions';

const mapStateToProps = (state) => ({
  allRooms: state.games.allRooms,
});


const mapDispatchToProps = (dispatch) => ({
  fetchAllGamesRooms: () => dispatch(fetchAllGamesRooms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameIndex);

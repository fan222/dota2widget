import { connect } from 'react-redux';
import HeroIndex from './heros_index';
import {  fetchAllHerosData, fetchAllHerosPairs }
          from '../../actions/heros_actions';

const mapStateToProps = (state) => ({
  allPairs: state.heros.allPairs,
  allHeros: state.heros.allHeros
});


const mapDispatchToProps = (dispatch) => ({
  fetchAllHerosData: () => dispatch(fetchAllHerosData()),
  fetchAllHerosPairs: () => dispatch(fetchAllHerosPairs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroIndex);

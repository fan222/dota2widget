import {  fetchAllHerosData, fetchSingleHeroData,fetchAllHerosPairs }
          from '../util/heros_api_util';
import {  FETCH_ALL_HEROS_DATA, FETCH_SINGLE_HERO_DATA,FETCH_ALL_HEROS_PAIRS,
          receiveAllHerosData, receiveSingleHeroData,receiveAllHerosPairs}
          from '../actions/heros_actions';

export default ({dispatch}) => next => action => {
  const fetchAllDataSuccess = heros => dispatch(receiveAllHerosData(heros));
  const fetchSingleSuccess = hero => dispatch(receiveSingleHeroData(hero));
  const fetchAllPairsleSuccess = pairs => dispatch(receiveAllHerosPairs(pairs));

  switch (action.type) {
    case FETCH_ALL_HEROS_DATA:
      fetchAllHerosData(fetchAllDataSuccess);
      return next(action);
    case FETCH_SINGLE_HERO_DATA:
      fetchSingleHeroData(action.id, fetchSingleSuccess);
      return next(action);
    case FETCH_ALL_HEROS_PAIRS:
      fetchAllHerosPairs(fetchAllPairsleSuccess);
      return next(action);
    default:
      return next(action);
  }
};

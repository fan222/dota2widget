import {  RECEIVE_ALL_HEROS_DATA, RECEIVE_SINGLE_HERO_DATA,
          RECEIVE_ALL_HEROS_PAIRS }
          from '../actions/heros_actions';
import merge from 'lodash/merge';

const _defaultHeros = {
  allPairs: {},
  allHeros: {}
};

const HerosReducer = (state = _defaultHeros, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_HEROS_DATA:
        return merge({}, state, {allHeros: action.heros});
      case RECEIVE_SINGLE_HERO_DATA:
        return merge({},state,
                        {allHeros: {[action.hero.ID]: action.hero}});
      case RECEIVE_ALL_HEROS_PAIRS:
        return merge({}, state, {allPairs: action.pairs});
      default:
        return state;
    }
};

export default HerosReducer;

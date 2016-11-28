import { ADD_FAVORTIE, DELETE_FAVORTIE }
from '../actions/favorites_actions';
import merge from 'lodash/merge';

const _defaultFavorites = {
  ids: []
};

const FavoritesReducer = (state = _defaultFavorites, action) => {
    Object.freeze(state);
    let newIds;

    switch (action.type) {
      case ADD_FAVORTIE:
        newIds = state.ids;
        newIds.push(parseInt(action.id));
        localStorage['favorites'] = newIds;
        return merge({}, state, {ids: newIds});
      case DELETE_FAVORTIE:
        newIds = state.ids;
        let index = newIds.indexOf(parseInt(action.id));
        newIds.splice(index, 1);
        localStorage['favorites'] = newIds;
        return merge({}, state, {ids: newIds});
      default:
        return state;
    }
};

export default FavoritesReducer;

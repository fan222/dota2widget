import { ADD_FAVORTIE, DELETE_FAVORTIE }
from '../actions/favorites_actions';

const _defaultFavorites = {
  ids: []
};

const FavoritesReducer = (state = _defaultFavorites, action) => {
    Object.freeze(state);
    let newIds;

    switch (action.type) {
      case ADD_FAVORTIE:
        newIds = state.ids;
        newIds.push(action.id);
        localStorage['favorites'] = newIds;
        return {ids: newIds};
      case DELETE_FAVORTIE:
        newIds = state.ids;
        let index = newIds.indexOf(action.id);
        newIds.splice(index, 1);
        localStorage['favorites'] = newIds;
        return {ids: newIds};
      default:
        return state;
    }
};

export default FavoritesReducer;

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import {addFavorite, deleteFavorite} from './actions/favorites_actions';
import { fetchAllGamesRooms, fetchSingleGameRoom}
        from './actions/games_actions';


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (!localStorage.getItem('favorites') ||
      localStorage.getItem('favorites').length === 0) {
    preloadedState = {favorites: {ids: []}};
  } else {
    let ids = localStorage.getItem('favorites').split(",");
    let numIds = ids.map(id => parseInt(id));
    preloadedState = {favorites: {ids: numIds}};
  }
  let store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);


  window.store = store;
  window.addFavorite = addFavorite;
  window.deleteFavorite = deleteFavorite;
  window.fetchAllGamesRooms = fetchAllGamesRooms;
  window.fetchSingleGameRoom = fetchSingleGameRoom;
});

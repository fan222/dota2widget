export const FETCH_ALL_HEROS_DATA = "FETCH_ALL_HEROS_DATA";
export const FETCH_SINGLE_HERO_DATA = "FETCH_SINGLE_HERO_DATA";
export const FETCH_ALL_HEROS_PAIRS = "FETCH_ALL_HEROS_PAIRS";

export const RECEIVE_ALL_HEROS_DATA = "RECEIVE_ALL_HEROS_DATA";
export const RECEIVE_SINGLE_HERO_DATA = "RECEIVE_SINGLE_HERO_DATA";
export const RECEIVE_ALL_HEROS_PAIRS = "RECEIVE_ALL_HEROS_PAIRS";


export const fetchAllHerosData = () => ({
  type: FETCH_ALL_HEROS_DATA
});


export const fetchSingleHeroData = (id) => ({
  type: FETCH_SINGLE_HERO_DATA,
  id: id
});


export const fetchAllHerosPairs = () => ({
  type: FETCH_ALL_HEROS_PAIRS
});

export const receiveAllHerosData = (heros) => ({
  type: RECEIVE_ALL_HEROS_DATA,
  heros: heros
});

export const receiveSingleHeroData = (hero) => ({
  type: RECEIVE_SINGLE_HERO_DATA,
  hero
});

export const receiveAllHerosPairs = (pairs) => ({
  type: RECEIVE_ALL_HEROS_PAIRS,
  pairs: pairs
});

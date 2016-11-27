export const FETCH_ALL_HEROS_DATA = "FETCH_ALL_HEROS_DATA";
export const FETCH_SINGLE_HERO_DATA = "FETCH_SINGLE_HERO_DATA";
export const FETCH_ALL_HEROS_PAIRS = "FETCH_ALL_HEROS_PAIRS";

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

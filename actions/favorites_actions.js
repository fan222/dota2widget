export const ADD_FAVORTIE = "ADD_FAVORTIE";
export const DELETE_FAVORTIE = "DELETE_FAVORTIE";


export const addFavorite = (id) => ({
  type: ADD_FAVORTIE,
  id: id
});

export const deleteFavorite = (id) => ({
  type: DELETE_FAVORTIE,
  id: id
});

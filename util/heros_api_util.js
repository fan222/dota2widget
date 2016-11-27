export const fetchAllHerosData = (success) => {
  $.ajax({
    method: "GET",
    url: "http://api.herostats.io/heroes/all",
    success
  });
};

export const fetchSingleHeroData = (id,success) => {
  $.ajax({
    method: "GET",
    url: `http://api.herostats.io/heroes/${id}`,
    success
  });
};

export const fetchAllHerosPairs = (success) => {
  $.ajax({
    method: "GET",
    url: "http://api.herostats.io/heroes",
    success
  });
};

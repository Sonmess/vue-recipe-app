import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get("search.php?s=" + keyword).then(({ data }) => {
    commit("setSearchMeals", data.meals);
  });
}

export function fetchMealDetail({commit}, mealId) {
  axiosClient.get("lookup.php?i=" + mealId).then(({data}) => {
    if (data.meals[0]) {
      commit("setMealDetail", data.meals[0]);
    }
  });
}

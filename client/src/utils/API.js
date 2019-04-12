import axios from "axios";

export default {
  // Search Edamam for recipes
  searchRecipes: function(q) {
    const apiURL = "https://api.edamam.com/search?";
    const apiKey = "&app_key=71473ff8952bb7da30bc7a2f30cb6e51";
    const apiID = "&app_id=f7341c7d";
    let to = "&to=50";
    let query = "q=" + q;
    let health = "&health=alcohol-free";
    return axios.get(apiURL + query + apiID + apiKey + to + health);
  },
  // get a single recipe w/ uri
  getSingleRecipe: function(id) {
    const apiURL = "https://api.edamam.com/search?";
    const apiKey = "&app_key=71473ff8952bb7da30bc7a2f30cb6e51";
    const apiID = "&app_id=f7341c7d";
    let r =
      "&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_" + id;
    return axios.get(apiURL + r + apiID + apiKey);
  },
  getDBRecipes: function(user) {
    return axios.get("api/" + user);
  },
  updateFavs: function(user, newFav) {
    return axios.put("api/" + user, { fav: newFav });
  },
  updateMenu: function(user, newMenu) {
    return axios.post("api/menu/" + user, { weeklyMenu: newMenu });
  },
  updateMeal: function(user, day, meal, recipe) {
    return axios.put("api/meal/" + user, {
      day: day,
      meal: meal,
      recipe: recipe
    });
  },
  saveUser: function(user) {
    return axios.post("api/user", { email: user });
  },
  postRecipediaValues: function(searchCriteria) {
    return axios.post("api/searching", searchCriteria);
  },
  postUserPreferences: function(preferenceValues) {
    return axios.post("api/preferences", preferenceValues);
  },
  updatePref: function(user, preferences) {
    return axios.put("api/settings/" + user, preferences);
  },
  sendSMS: function(phone, text) {
    return axios.post("api/sms", { phone: phone, text: text });
  },
  sendEmail: function(email, text) {
    return axios.post("api/email", { email: email, text: text });
  },
  removeMeal: function(user, day, meal) {
    return axios.put("api/remove_meal/" + user, { day: day, meal: meal });
  }
};

import { action, observable } from "mobx";

const ingredientsNamingCache = {};

class IngredientsStore {
  @observable ingredients = [];

  getName(id) {
    if (!ingredientsNamingCache[id]) {
      ingredientsNamingCache[id] = this.ingredients.find(
        ingredient => ingredient.id === id
      ).name;
    }
    return ingredientsNamingCache[id];
  }

  @action
  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }
}

export default new IngredientsStore();

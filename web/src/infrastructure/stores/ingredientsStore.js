import { action, observable } from "mobx";
import uniqBy from "lodash/uniqBy";

const ingredientsCache = {};

export class IngredientsStore {
  @observable ingredients = [];

  getIngredient(id) {
    if (!ingredientsCache[id]) {
      ingredientsCache[id] = this.ingredients.find(
        ingredient => ingredient.id === id
      );
    }
    return ingredientsCache[id];
  }

  getIngredientsListOrderedByLeft(ingredients) {
    // expensive operation, but ingredients list won't be much populated.
    return uniqBy(
      [
        ...ingredients.map(ingredient => this.getIngredient(ingredient)),
        ...this.ingredients
      ],
      ingredient => ingredient.id
    );
  }

  getName(id) {
    const ingredient = this.getIngredient(id);
    return ingredient ? ingredient.name : null;
  }

  @action
  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }
}

export default new IngredientsStore();

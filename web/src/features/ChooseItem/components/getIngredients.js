import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";

export default ingredients => {
  return ingredients
    .map(ingredientId => ingredientsStore.getName(ingredientId))
    .join(", ");
};

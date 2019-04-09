import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";

export default function getPrice(ingredients) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(
    ingredientsStore.ingredients.reduce((price, ingredient) => {
      const hasIngredient = ingredients.some(i => i === ingredient.id);
      if (hasIngredient) {
        return price + ingredient.price;
      }
      return price;
    }, 0)
  );
}

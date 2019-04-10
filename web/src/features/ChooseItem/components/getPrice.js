import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";

export function formatPrice(decimal) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(decimal);
}

export default function getPrice(ingredients) {
  return formatPrice(
    ingredientsStore.ingredients.reduce((price, ingredient) => {
      const hasIngredient = ingredients.some(i => i === ingredient.id);
      if (hasIngredient) {
        return price + ingredient.price;
      }
      return price;
    }, 0)
  );
}

import burgersStore from "../stores/burgersStore";
import fetchBurgers from "../services/fetchBurgers";
import fetchIngredients from "../services/fetchIngredients";
import ingredientsStore from "../stores/ingredientsStore";

export default async () => {
  const [burgersResponse, ingredientsResponse] = await Promise.all([
    fetchBurgers(),
    fetchIngredients()
  ]);
  burgersStore.setBurgers(burgersResponse.data);
  ingredientsStore.setIngredients(ingredientsResponse.data);
};

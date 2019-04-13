import { IngredientsStore } from "../ingredientsStore";

const ingredientsStore = new IngredientsStore();
ingredientsStore.setIngredients([
  { id: "alface", name: "Alface", price: 0.4 },
  { id: "bacon", name: "Bacon", price: 2 },
  { id: "hamburguer-de-carne", name: "Hambúrguer de carne", price: 3 },
  { id: "ovo", name: "Ovo", price: 0.8 },
  { id: "queijo", name: "Queijo", price: 1.5 }
]);

export default ingredientsStore;

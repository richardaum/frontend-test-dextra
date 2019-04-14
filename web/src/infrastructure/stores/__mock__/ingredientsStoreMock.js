import { IngredientsStore } from "../ingredientsStore";

export const alface = { id: "alface", name: "Alface", price: 0.4 };
export const bacon = { id: "bacon", name: "Bacon", price: 2 };
export const carne = {
  id: "hamburguer-de-carne",
  name: "Hambúrguer de carne",
  price: 3
};
export const ovo = { id: "ovo", name: "Ovo", price: 0.8 };
export const queijo = { id: "queijo", name: "Queijo", price: 1.5 };

const ingredientsStoreMock = new IngredientsStore();
ingredientsStoreMock.setIngredients([alface, bacon, carne, ovo, queijo]);

export default ingredientsStoreMock;

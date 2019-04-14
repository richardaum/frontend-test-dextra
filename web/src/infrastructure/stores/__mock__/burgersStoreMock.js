import { BurgersStore } from "../burgersStore";

const burgersStoreMock = new BurgersStore();
burgersStoreMock.setBurgers([
  {
    id: "x-bacon",
    name: "X-Bacon",
    ingredients: ["bacon", "hamburguer-de-carne", "queijo"]
  },
  {
    id: "x-burger",
    name: "X-Burger",
    ingredients: ["hamburguer-de-carne", "queijo"]
  },
  {
    id: "x-egg",
    name: "X-Egg",
    ingredients: ["ovo", "hamburguer-de-carne", "queijo"]
  },
  {
    id: "x-egg-bacon",
    name: "X-Egg Bacon",
    ingredients: ["ovo", "bacon", "hamburguer-de-carne", "queijo"]
  }
]);

export default burgersStoreMock;

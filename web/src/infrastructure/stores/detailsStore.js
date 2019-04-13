import { computed, action, observable } from "mobx";
import burgersStore from "./burgersStore";
import ingredientsStore from "./ingredientsStore";
import hasLightOffer, { LIGHT_OFFER } from "../services/lightOffer";
import hasMeatOffer, { MEAT_OFFER } from "../services/meatOffer";
import hasCheeseOffer, { CHEESE_OFFER } from "../services/cheeseOffer";

export class DetailsStore {
  @observable selectedBurgerId = null;

  @observable ingredientsQuantity = new Map();

  @action
  setSelectedBurgerId(id) {
    this.selectedBurgerId = id;
    this.ingredientsQuantity.clear();
  }

  @action
  incrementIngredientsQuantity(ingredients) {
    let array = ingredients;
    if (!Array.isArray(array)) {
      array = [array];
    }
    array.forEach(ingredient => {
      this.ingredientsQuantity.set(
        ingredient,
        (this.ingredientsQuantity.get(ingredient) || 0) + 1
      );
    });
  }

  @action
  decrementIngredientQuantity(ingredient) {
    const quantity = this.ingredientsQuantity.get(ingredient);
    if (quantity > 0) {
      this.ingredientsQuantity.set(ingredient, quantity - 1);
    }
    if (quantity - 1 <= 0) {
      this.ingredientsQuantity.delete(ingredient);
    }
  }

  getQuantity(ingredient) {
    return this.ingredientsQuantity.get(ingredient);
  }

  @computed
  get subtotal() {
    let subtotal = 0;
    this.ingredientsQuantity.forEach((qt, ingredient) => {
      subtotal += qt * ingredientsStore.getIngredient(ingredient).price;
    });
    return subtotal;
  }

  @computed
  get total() {
    let totalDiscount = 0;
    this.activeOffers.forEach(offer => {
      totalDiscount += offer.discount;
    });
    return this.subtotal - totalDiscount;
  }

  @computed
  get selectedBurger() {
    return burgersStore.burgers.find(
      burger => burger.id === this.selectedBurgerId
    );
  }

  @computed
  get activeOffers() {
    const ingredients = Array.from(this.ingredientsQuantity.keys());
    const meatQuantity = this.ingredientsQuantity.get("hamburguer-de-carne");
    const cheeseQuantity = this.ingredientsQuantity.get("queijo");
    const offers = new Map();

    const lightOffer = hasLightOffer(ingredients, this.subtotal);
    if (lightOffer) {
      offers.set(LIGHT_OFFER, lightOffer);
    }

    const meatOffer = hasMeatOffer(meatQuantity);
    if (meatOffer) {
      offers.set(MEAT_OFFER, meatOffer);
    }

    const cheeseOffer = hasCheeseOffer(cheeseQuantity);
    if (cheeseOffer) {
      offers.set(CHEESE_OFFER, cheeseOffer);
    }

    return offers;
  }
}

export default new DetailsStore();

import ingredientsStore from "../stores/ingredientsStore";

export const MEAT_OFFER = "MEAT_OFFER";

const BASE_CHOSEN_QUANTITY = 3;

const BASE_PAID_QUANTITY = 2;

export default function hasMeatOffer(quantity) {
  const ingredient = ingredientsStore.getIngredient("hamburguer-de-carne");
  const offerQuantity = Math.floor(quantity / BASE_CHOSEN_QUANTITY);
  const paidQuantity =
    offerQuantity * BASE_PAID_QUANTITY + (quantity % BASE_CHOSEN_QUANTITY);
  const discount = offerQuantity * ingredient.price;

  return offerQuantity > 0
    ? {
        label: MEAT_OFFER,
        quantity,
        offerQuantity,
        paidQuantity,
        discount
      }
    : null;
}

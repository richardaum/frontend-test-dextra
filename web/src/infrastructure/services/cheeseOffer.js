import ingredientsStore from "../stores/ingredientsStore";

export const CHEESE_OFFER = "CHEESE_OFFER";

const BASE_CHOSEN_QUANTITY = 3;

const BASE_PAID_QUANTITY = 2;

export default function hasCheeseOffer(quantity) {
  const ingredient = ingredientsStore.getIngredient("queijo");

  if (!ingredient) return null;

  const offerQuantity = Math.floor(quantity / BASE_CHOSEN_QUANTITY);
  const discount = offerQuantity * ingredient.price;
  const paidQuantity =
    offerQuantity * BASE_PAID_QUANTITY + (quantity % BASE_CHOSEN_QUANTITY);

  return offerQuantity > 0
    ? {
        label: CHEESE_OFFER,
        quantity,
        offerQuantity,
        paidQuantity,
        discount
      }
    : null;
}

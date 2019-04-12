export const LIGHT_OFFER = "LIGHT_OFFER";

const DISCOUNT = 0.1; // 10%

export default function hasLightOffer(ingredients, subtotal) {
  return ingredients.includes("alface") && !ingredients.includes("bacon")
    ? { label: LIGHT_OFFER, discount: subtotal * DISCOUNT }
    : null;
}

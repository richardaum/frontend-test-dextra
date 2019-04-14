import ingredientsStore from "../ingredientsStore";
import ingredientsStoreMock, {
  bacon,
  alface,
  ovo,
  queijo,
  carne
} from "../__mock__/ingredientsStoreMock";

describe("ingredientsStore", () => {
  beforeEach(() => {
    ingredientsStore.setIngredients(ingredientsStoreMock.ingredients);
  });
  describe("getIngredientsListOrderedByLeft", () => {
    it("should return all ingredients with all current ingredients at left", () => {
      expect(
        ingredientsStore.getIngredientsListOrderedByLeft([
          "queijo",
          "ovo",
          "alface"
        ])
      ).toEqual([queijo, ovo, alface, bacon, carne]);
    });
  });
  describe("getName", () => {
    it("should return a ingredient name from an ingredient id", () => {
      expect(ingredientsStore.getName("bacon")).toEqual("Bacon");
    });
    it("shoudl return null for a not existing ingredient", () => {
      expect(ingredientsStore.getName("cebola")).toEqual(null);
    });
  });
});

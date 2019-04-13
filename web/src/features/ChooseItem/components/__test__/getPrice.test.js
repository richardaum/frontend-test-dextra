import getPrice from "../getPrice";

jest.mock("../../../../infrastructure/stores/ingredientsStore", () => ({
  ingredients: [
    { id: "alface", name: "Alface", price: 0.4 },
    { id: "bacon", name: "Bacon", price: 2 },
    { id: "hamburguer-de-carne", name: "Hambúrguer de carne", price: 3 },
    { id: "ovo", name: "Ovo", price: 0.8 },
    { id: "queijo", name: "Queijo", price: 1.5 }
  ]
}));

describe("getPrice and formatPrice", () => {
  it("should return the correct price for a single X-Bacon", () => {
    const price = getPrice(["bacon", "hamburguer-de-carne", "queijo"]);
    expect(price).toBe("R$6.50");
  });
  it("should return the correct price for a single X-Burguer", () => {
    const price = getPrice(["hamburguer-de-carne", "queijo"]);
    expect(price).toBe("R$4.50");
  });
  it("should return the correct price for a single X-Egg", () => {
    const price = getPrice(["ovo", "hamburguer-de-carne", "queijo"]);
    expect(price).toBe("R$5.30");
  });
  it("should return the correct price for a single X-Egg Bacon", () => {
    const price = getPrice(["ovo", "bacon", "hamburguer-de-carne", "queijo"]);
    expect(price).toBe("R$7.30");
  });
  it("should return the correct price for a single burger with all ingredients", () => {
    const price = getPrice([
      "ovo",
      "bacon",
      "hamburguer-de-carne",
      "queijo",
      "alface"
    ]);
    expect(price).toBe("R$7.70");
  });
});

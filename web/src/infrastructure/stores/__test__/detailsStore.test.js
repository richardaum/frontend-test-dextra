import detailsStore from "../detailsStore";
import ingredientsStoreMock from "../__mock__/ingredientsStoreMock";
import burgersStore from "../burgersStore";
import burgersStoreMock from "../__mock__/burgersStoreMock";
import ingredientsStore from "../ingredientsStore";

describe("detailsStore", () => {
  beforeEach(() => {
    ingredientsStore.ingredients = ingredientsStoreMock.ingredients;
    detailsStore.selectedBurgerId = null;
    detailsStore.ingredientsQuantity = new Map();
  });
  afterEach(() => {
    ingredientsStore.ingredients = [];
    detailsStore.selectedBurgerId = null;
    detailsStore.ingredientsQuantity = new Map();
  });
  describe("subtotal", () => {
    it("should calculate it considering zero ingredients", () => {
      expect(detailsStore.subtotal).toBe(0);
    });
    it("should calculate it considering a few ingredients", () => {
      detailsStore.ingredientsQuantity.set("bacon", 2);
      detailsStore.ingredientsQuantity.set("queijo", 2);
      detailsStore.ingredientsQuantity.set("alface", 2);
      expect(detailsStore.subtotal).toBe(7.8);
    });
  });
  describe("activeOffers", () => {
    let undo;
    beforeAll(() => {
      undo = detailsStore.__set__("ingredientsStore", ingredientsStoreMock);
      detailsStore.selectedBurgerId = null;
      detailsStore.ingredientsQuantity = new Map();
    });
    afterAll(() => {
      undo();
    });

    describe("light offer", () => {
      beforeEach(() => {
        detailsStore.ingredientsQuantity.set("alface", 1);
      });
      it("should return light offer as an active offer", () => {
        const offer = detailsStore.activeOffers.get("LIGHT_OFFER");
        expect(offer).toBeTruthy();
      });
      it("should right the proper discount for light offer", () => {
        const alface = ingredientsStoreMock.getIngredient("alface");
        const offer = detailsStore.activeOffers.get("LIGHT_OFFER");
        expect(offer.discount).toBe(alface.price * 0.1);
      });
      it("should not have the light offer is bacon is selected", () => {
        detailsStore.ingredientsQuantity.set("bacon", 1);
        const offer = detailsStore.activeOffers.get("LIGHT_OFFER");
        expect(offer).toBeFalsy();
      });
    });

    describe("meat offer", () => {
      beforeEach(() => {
        detailsStore.ingredientsQuantity.set("hamburguer-de-carne", 3);
      });
      it("should return meat offer as an active offer", () => {
        const offer = detailsStore.activeOffers.get("MEAT_OFFER");
        expect(offer).toBeTruthy();
      });
      it("should right the proper discount for 1x meat offer", () => {
        const meat = ingredientsStoreMock.getIngredient("hamburguer-de-carne");
        const offer = detailsStore.activeOffers.get("MEAT_OFFER");
        // take 3, pay 2 = you will not pay only 1 meat from those 3
        expect(offer.discount).toBe(meat.price);
      });
      it("should right the proper discount for 2x meat offer", () => {
        detailsStore.ingredientsQuantity.set("hamburguer-de-carne", 6);
        const meat = ingredientsStoreMock.getIngredient("hamburguer-de-carne");
        const offer = detailsStore.activeOffers.get("MEAT_OFFER");
        // take 6, pay 4 = you will not pay only 2 meat from those 6
        expect(offer.discount).toBe(meat.price * 2);
      });
    });

    describe("cheese offer", () => {
      beforeEach(() => {
        detailsStore.ingredientsQuantity.set("queijo", 3);
      });
      it("should return cheese offer as an active offer", () => {
        const offer = detailsStore.activeOffers.get("CHEESE_OFFER");
        expect(offer).toBeTruthy();
      });
      it("should right the proper discount for 1x cheese offer", () => {
        const cheese = ingredientsStoreMock.getIngredient("queijo");
        const offer = detailsStore.activeOffers.get("CHEESE_OFFER");
        // take 3, pay 2 = you will not pay only 1 cheese from those 3
        expect(offer.discount).toBe(cheese.price);
      });
      it("should right the proper discount for 2x cheese offer", () => {
        detailsStore.ingredientsQuantity.set("queijo", 6);
        const cheese = ingredientsStoreMock.getIngredient("queijo");
        const offer = detailsStore.activeOffers.get("CHEESE_OFFER");
        // take 6, pay 4 = you will not pay only 2 cheese from those 6
        expect(offer.discount).toBe(cheese.price * 2);
      });
    });
  });
  describe("setSelectedBurgerId", () => {
    beforeAll(() => {
      burgersStore.setBurgers(burgersStoreMock.burgers);
    });
    it("should set a burger id in the class", () => {
      detailsStore.setSelectedBurgerId("x-bacon");
      expect(detailsStore.selectedBurgerId).toBe("x-bacon");
      expect(detailsStore.selectedBurger).toBeTruthy();
    });
  });
  describe("incrementIngredientsQuantity", () => {
    beforeEach(() => {
      detailsStore.ingredientsQuantity = new Map();
    });
    afterAll(() => {
      detailsStore.ingredientsQuantity = new Map();
    });
    it("should increment a single ingredient quantity", () => {
      detailsStore.incrementIngredientsQuantity("bacon");
      expect(detailsStore.ingredientsQuantity.get("bacon")).toBe(1);
    });
    it("should increment multiple ingredients quantity", () => {
      detailsStore.incrementIngredientsQuantity(["ovo", "alface"]);
      expect(detailsStore.ingredientsQuantity.get("ovo")).toBe(1);
      expect(detailsStore.ingredientsQuantity.get("alface")).toBe(1);
    });
  });
  describe("decrementIngredientQuantity", () => {
    beforeEach(() => {
      detailsStore.ingredientsQuantity.set("bacon", 2);
      detailsStore.ingredientsQuantity.set("alface", 1);
      detailsStore.ingredientsQuantity.set("ovo", 0);
    });
    it("should decrement a quantity of a ingredient", () => {
      detailsStore.decrementIngredientQuantity("bacon");
      expect(detailsStore.ingredientsQuantity.get("bacon")).toBe(1);
    });
    it("should remove a ingredient if the quantity is zero after a decrease", () => {
      expect(detailsStore.ingredientsQuantity.get("alface")).toBe(1);
      detailsStore.decrementIngredientQuantity("alface");
      expect(detailsStore.ingredientsQuantity.has("alface")).toBeFalsy();
    });
    it("should remove a ingredient if the quantity is zero before a decrease", () => {
      expect(detailsStore.ingredientsQuantity.get("ovo")).toBe(0);
      detailsStore.decrementIngredientQuantity("ovo");
      expect(detailsStore.ingredientsQuantity.has("ovo")).toBeFalsy();
    });
  });
  describe("total", () => {
    it("should return the total value from a burger", () => {
      detailsStore.ingredientsQuantity.set("queijo", 3);
      detailsStore.ingredientsQuantity.set("alface", 2);
      detailsStore.ingredientsQuantity.set("hamburguer-de-carne", 3);
      expect(detailsStore.total.toFixed(2)).toEqual("8.37");
    });
  });
});

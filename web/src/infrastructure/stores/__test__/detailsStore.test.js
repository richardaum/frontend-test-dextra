import detailsStore, { DetailsStore } from "../detailsStore";
import ingredientsStoreMock from "../__mock__/ingredientsStoreMock";

describe("detailsStore", () => {
  describe("subtotal", () => {
    it("should calculate it considering zero ingredients", () => {
      const store = new DetailsStore();
      expect(store.subtotal).toBe(0);
    });
    it("should calculate it considering a few ingredients", () => {
      const store = new DetailsStore();
      const undo = detailsStore.__set__(
        "ingredientsStore",
        ingredientsStoreMock
      );
      store.ingredientsQuantity.set("bacon", 2);
      store.ingredientsQuantity.set("queijo", 2);
      store.ingredientsQuantity.set("alface", 2);
      expect(store.subtotal).toBe(7.8);
      undo();
    });
  });
  describe("activeOffers", () => {
    let undo;
    beforeAll(() => {
      undo = detailsStore.__set__("ingredientsStore", ingredientsStoreMock);
    });
    afterAll(() => {
      undo();
    });

    describe("light offer", () => {
      let store;
      beforeAll(() => {
        store = new DetailsStore();
        store.ingredientsQuantity.set("alface", 1);
      });
      it("should return light offer as an active offer", () => {
        const offer = store.activeOffers.get("LIGHT_OFFER");
        expect(offer).toBeTruthy();
      });
      it("should right the proper discount for light offer", () => {
        const alface = ingredientsStoreMock.getIngredient("alface");
        const offer = store.activeOffers.get("LIGHT_OFFER");
        expect(offer.discount).toBe(alface.price * 0.1);
      });
      it("should not have the light offer is bacon is selected", () => {
        store.ingredientsQuantity.set("bacon", 1);
        const offer = store.activeOffers.get("LIGHT_OFFER");
        expect(offer).toBeFalsy();
      });
    });

    describe("meat offer", () => {
      let store;
      beforeAll(() => {
        store = new DetailsStore();
        store.ingredientsQuantity.set("hamburguer-de-carne", 3);
      });
      it("should return meat offer as an active offer", () => {
        const offer = store.activeOffers.get("MEAT_OFFER");
        expect(offer).toBeTruthy();
      });
      it("should right the proper discount for 1x meat offer", () => {
        const meat = ingredientsStoreMock.getIngredient("hamburguer-de-carne");
        const offer = store.activeOffers.get("MEAT_OFFER");
        // take 3, pay 2 = you will not pay only 1 meat from those 3
        expect(offer.discount).toBe(meat.price);
      });
      it("should right the proper discount for 2x meat offer", () => {
        store.ingredientsQuantity.set("hamburguer-de-carne", 6);
        const meat = ingredientsStoreMock.getIngredient("hamburguer-de-carne");
        const offer = store.activeOffers.get("MEAT_OFFER");
        // take 6, pay 4 = you will not pay only 2 meat from those 6
        expect(offer.discount).toBe(meat.price * 2);
      });
    });

    describe("cheese offer", () => {
      let store;
      beforeAll(() => {
        store = new DetailsStore();
        store.ingredientsQuantity.set("queijo", 3);
      });
      it("should return cheese offer as an active offer", () => {
        const offer = store.activeOffers.get("CHEESE_OFFER");
        expect(offer).toBeTruthy();
      });
      it("should right the proper discount for 1x cheese offer", () => {
        const cheese = ingredientsStoreMock.getIngredient("queijo");
        const offer = store.activeOffers.get("CHEESE_OFFER");
        // take 3, pay 2 = you will not pay only 1 cheese from those 3
        expect(offer.discount).toBe(cheese.price);
      });
      it("should right the proper discount for 2x cheese offer", () => {
        store.ingredientsQuantity.set("queijo", 6);
        const cheese = ingredientsStoreMock.getIngredient("queijo");
        const offer = store.activeOffers.get("CHEESE_OFFER");
        // take 6, pay 4 = you will not pay only 2 cheese from those 6
        expect(offer.discount).toBe(cheese.price * 2);
      });
    });
  });
});

/* eslint-disable import/named */
import React from "react";
import { shallow } from "enzyme";
import store from "../../../../infrastructure/stores/detailsStore";
import ConnectedQuantity from "../Quantity";

describe("<Quantity /> component", () => {
  beforeAll(() => {
    store.incrementIngredientsQuantity([
      "bacon",
      "hamburguer-de-carne",
      "queijo"
    ]);
  });

  it("should render <Quantity /> from a ingredient according to a X-Bacon", () => {
    const childFromIngredient = id => {
      const typography = shallow(<ConnectedQuantity ingredient={{ id }} />)
        .shallow()
        .find("WithStyles(ForwardRef(Typography))");
      return typography.length && typography.prop("children");
    };

    expect(childFromIngredient("bacon")).toEqual(1);
    expect(childFromIngredient("hamburguer-de-carne")).toEqual(1);
    expect(childFromIngredient("queijo")).toEqual(1);
    expect(childFromIngredient("alface")).toBeFalsy();
    expect(childFromIngredient("ovo")).toBeFalsy();
  });
});

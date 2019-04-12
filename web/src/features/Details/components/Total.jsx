import React from "react";
import { Observer } from "mobx-react";
import Title from "./Title";
import Price from "./Price";
import { formatPrice } from "../../ChooseItem/components/getPrice";
import detailsStore from "../../../infrastructure/stores/detailsStore";

export default function Total() {
  return (
    <Title text="Total">
      <Price>
        <Observer>{() => formatPrice(detailsStore.total)}</Observer>
      </Price>
    </Title>
  );
}

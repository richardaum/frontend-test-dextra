import React from "react";
import { Observer } from "mobx-react";
import Divider from "@material-ui/core/Divider";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import { formatPrice } from "../../ChooseItem/components/getPrice";
import Title from "./Title";
import Price from "./Price";

const Subtotal = function Subtotal() {
  return (
    <React.Fragment>
      <Title text="Subtotal">
        <Price>
          <Observer>{() => formatPrice(detailsStore.subtotal)}</Observer>
        </Price>
      </Title>
      <Divider />
    </React.Fragment>
  );
};

export default Subtotal;

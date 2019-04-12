import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import { observer } from "mobx-react";
import classnames from "classnames";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import MeatOffer from "./MeatOffer";
import LightOffer from "./LightOffer";
import Title from "./Title";
import CheeseOffer from "./CheeseOffer";

const OfferList = withStyles({
  root: {}
})(function OfferList({ classes, className, ...props }) {
  return (
    <div className={classnames(classes.root, className)} {...props}>
      <LightOffer />
      <MeatOffer />
      <CheeseOffer />
    </div>
  );
});

const Offers = function Offers() {
  return (
    <React.Fragment>
      <Title text="Promoções" />
      <OfferList />
      <Divider />
    </React.Fragment>
  );
};

export default observer(() => {
  return detailsStore.activeOffers.size ? <Offers /> : null;
});

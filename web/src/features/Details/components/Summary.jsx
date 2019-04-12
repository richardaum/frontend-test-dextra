/* eslint-disable */
import React, { useCallback } from "react";
import classnames from "classnames";
import { Observer, observer } from "mobx-react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Remove from "@material-ui/icons/Remove";
import { red } from "@material-ui/core/colors";
import Panel from "../../../infrastructure/components/Panel";
import measures from "../../../infrastructure/theme/measures";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";
import { formatPrice } from "../../ChooseItem/components/getPrice";
import Subtotal from "./Subtotal";
import Offers from "./Offers";
import Offer, { OfferTitle, OfferDiscount, OfferSubtitle } from "./Offer";
import Total from "./Total";

const Content = withStyles({
  root: {
    padding: measures.unit(2),
    width: "100%",
    position: "sticky",
    top: 0,
    height: "fit-content"
  }
})(function Content({ classes, className, ...props }) {
  return <div className={classnames(classes.root, className)} {...props} />;
});

const Ingredient = withStyles({
  ingredient: { marginTop: measures.unit(2) },
  remove: {
    marginLeft: -measures.unit(1.5),
    marginRight: measures.unit(0.5),
    color: red[500]
  }
})(function Ingredient({ classes, quantity, ingredient }) {
  const handleClick = useCallback(() => {
    detailsStore.decrementIngredientQuantity(ingredient);
  }, [ingredient]);

  const ingredientObj = ingredientsStore.getIngredient(ingredient);

  return (
    <Offer className={classes.ingredient}>
      <IconButton className={classes.remove} onClick={handleClick}>
        <Remove />
      </IconButton>
      <OfferTitle text={ingredientObj.name} quantity={quantity} />
      <OfferDiscount price={ingredientObj.price * quantity} />
    </Offer>
  );
});

const IngredientList = observer(function IngredientList() {
  const components = [];
  detailsStore.ingredientsQuantity.forEach((quantity, ingredient) => {
    if (quantity) {
      components.push(
        <Ingredient
          // eslint-disable-next-line react/no-array-index-key
          key={ingredient}
          quantity={quantity}
          ingredient={ingredient}
        />
      );
    }
  });
  if (components.length) {
    components.push(<Divider key="IngredientList#Divider" />)
  }
  return components;
});

export default function Summary() {
  return (
    <Panel>
      <Content>
        <Typography color="textSecondary" variant="caption">
          Ingredientes
        </Typography>
        <Divider />

        <IngredientList />
        <Subtotal />
        <Offers />
        <Total />
      </Content>
    </Panel>
  );
}

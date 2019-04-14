import React, { useCallback } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import BackButton from "../../../infrastructure/components/BackButton";
import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";
import burgersStore from "../../../infrastructure/stores/burgersStore";
import { Container } from "../../ChooseItem/components/Picker";
import Title from "../../../infrastructure/components/Title";
import measures from "../../../infrastructure/theme/measures";
import assets from "../assets";
import {
  CardItem,
  CardItemImage,
  CardItemTitle,
  CardItemNote,
  CardItemContent
} from "../../../infrastructure/components/CardItem";
import { formatPrice } from "../../ChooseItem/components/getPrice";
import detailsStore from "../../../infrastructure/stores/detailsStore";
import Summary from "./Summary";
import ConnectedQuantity from "./Quantity";

const Wrapper = withStyles({
  root: { display: "flex" }
})(function Wrapper({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

const Body = withStyles({
  root: {
    width: "100%",
    listStyleType: "none",
    padding: 0,
    margin: `${measures.unit(1)}px 0`,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between"
  }
})(function Body({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

const Ingredient = withStyles({
  flex: { display: "flex" },
  content: { minWidth: 0 }
})(function Ingredient({ classes, ingredient, ...props }) {
  const handleClick = useCallback(() => {
    detailsStore.incrementIngredientsQuantity(ingredient.id);
  }, [ingredient]);

  return (
    <CardItem component="button" onClick={handleClick} {...props}>
      <CardItemContent className={classes.content}>
        <div className={classes.flex}>
          <ConnectedQuantity ingredient={ingredient} />
          <CardItemTitle>{ingredient.name}</CardItemTitle>
        </div>
        <CardItemNote>{formatPrice(ingredient.price)}</CardItemNote>
      </CardItemContent>
      <CardItemImage asset={assets[ingredient.id]} />
    </CardItem>
  );
});

export default withStyles({
  container: { width: "100%" },
  addButton: { marginLeft: "auto" }
})(
  withRouter(function Details({ classes, history, location }) {
    const burgerId = location.state.id;
    const burger = burgersStore.burgers.find(b => b.id === burgerId);
    const allIngredients = ingredientsStore.getIngredientsListOrderedByLeft(
      burger.ingredients
    );

    const handleClick = useCallback(() => {
      history.goBack();
    });

    return (
      <Wrapper>
        <Container className={classes.container}>
          <Title>
            <BackButton>Sanduíches</BackButton>
            <span> ~ </span>
            {burger.name}

            <Button
              color="primary"
              variant="contained"
              className={classes.addButton}
              onClick={handleClick}
            >
              Adicionar
            </Button>
          </Title>

          <Body>
            {allIngredients.map(ingredient => (
              <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
          </Body>
        </Container>

        <Summary />
      </Wrapper>
    );
  })
);

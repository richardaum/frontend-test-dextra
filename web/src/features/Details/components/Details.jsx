import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { withRouter } from "react-router-dom";
import BackButton from "../../../infrastructure/components/BackButton";
import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";
import burgersStore from "../../../infrastructure/stores/burgersStore";
import { Container } from "../../ChooseItem/components/Picker";
import Title from "../../../infrastructure/components/Title";
import Panel from "../../../infrastructure/components/Panel";
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

const classes = makeStyles({ container: { width: "100%" } });

export default withRouter(function Details({ location }) {
  const burgerId = location.state.id;
  const burger = burgersStore.burgers.find(b => b.id === burgerId);

  const allIngredients = ingredientsStore.getIngredientsListOrderedByLeft(
    burger.ingredients
  );

  return (
    <Wrapper>
      <Container className={classes().container}>
        <Title>
          <BackButton>Sanduíches</BackButton>
          <span> ~ </span>
          {burger.name}
        </Title>

        <Body>
          {allIngredients.map(ingredient => (
            <CardItem key={ingredient.id} role="button">
              <CardItemContent>
                <CardItemTitle>{ingredient.name}</CardItemTitle>
                <CardItemNote>{formatPrice(ingredient.price)}</CardItemNote>
              </CardItemContent>
              <CardItemImage asset={assets[ingredient.id]} />
            </CardItem>
          ))}
        </Body>
      </Container>

      <Panel />
    </Wrapper>
  );
});

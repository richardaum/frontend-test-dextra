import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import assets from "../assets";
import getIngredients from "./getIngredients";
import getPrice from "./getPrice";
import {
  CardItem,
  CardItemContent,
  CardItemTitle,
  CardItemSubtitle,
  CardItemNote,
  CardItemImage
} from "../../../infrastructure/components/CardItem";

export default withRouter(function Burger({ history, id, name, ingredients }) {
  const handleClick = useCallback(() => {
    history.push(`/details/${id}`, { id });
  });
  return (
    <CardItem role="button" onClick={handleClick}>
      <CardItemContent>
        <CardItemTitle>{name}</CardItemTitle>
        <CardItemSubtitle>{getIngredients(ingredients)}</CardItemSubtitle>
        <CardItemNote>{getPrice(ingredients)}</CardItemNote>
      </CardItemContent>
      <CardItemImage asset={assets[id]} />
    </CardItem>
  );
});

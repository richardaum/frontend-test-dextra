import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import assets from "../assets";
import getIngredients from "./getIngredients";
import Cell from "./Cell";

export default withRouter(function Burger({ history, id, name, ingredients }) {
  const handleClick = useCallback(() => {
    history.push(`/details/${id}`);
  });
  return (
    <Cell
      title={name}
      subtitle={getIngredients(ingredients)}
      imgAsset={assets[id]}
      imgAlt="burger"
      onClick={handleClick}
    />
  );
});

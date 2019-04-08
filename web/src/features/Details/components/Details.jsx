import React from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import BackButton from "../../../infrastructure/components/BackButton";
import ingredientsStore from "../../../infrastructure/stores/ingredientsStore";

export default withRouter(function Details() {
  return (
    <div>
      <BackButton />
      <Typography>Details</Typography>

      <div>
        <Typography>Ingredients</Typography>
        {ingredientsStore.ingredients.map(ingredient => (
          <Typography>{ingredient.name}</Typography>
        ))}
      </div>
    </div>
  );
});

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import indigo from "@material-ui/core/colors/indigo";
import measures from "../../../infrastructure/theme/measures";
import detailsStore from "../../../infrastructure/stores/detailsStore";

const styles = {
  root: {
    background: indigo[500],
    color: "white",
    borderRadius: "4px",
    padding: `0 ${measures.unit(1)}px`,
    marginRight: measures.unit(1)
  }
};

export function Quantity({ classes, ingredient, ...props }) {
  const quantity = detailsStore.getQuantity(ingredient.id);
  return quantity ? (
    <Typography component="span" className={classes.root} {...props}>
      {quantity}
    </Typography>
  ) : null;
}

export default withStyles(styles)(observer(Quantity));

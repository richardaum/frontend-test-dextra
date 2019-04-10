import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import measures from "../../theme/measures";

export default withStyles({
  root: {
    flex: 1,
    padding: measures.unit(2),
    display: "flex",
    flexFlow: "column nowrap"
  }
})(function CardItemContent({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

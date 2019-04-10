import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import measures from "../../theme/measures";

export default withStyles({
  root: {
    marginTop: measures.unit(1),
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  }
})(function CardItemSubtitle({ classes, ...props }) {
  return (
    <Typography
      className={classes.root}
      title={props.children}
      component="span"
      variant="caption"
      color="textSecondary"
      {...props}
    />
  );
});

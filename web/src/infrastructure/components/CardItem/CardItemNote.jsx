import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

export default withStyles({
  root: { marginTop: "auto" }
})(function CardItemNote({ classes, ...props }) {
  return (
    <Typography
      variant="body1"
      noWrap
      title={props.children}
      className={classes.root}
      {...props}
    />
  );
});

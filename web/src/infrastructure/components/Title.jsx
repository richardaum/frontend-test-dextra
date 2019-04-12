import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const Title = withStyles({
  root: {
    height: "36px",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center"
  }
})(function Title({ classes, ...props }) {
  return <Typography className={classes.root} variant="h2" {...props} />;
});

export default Title;

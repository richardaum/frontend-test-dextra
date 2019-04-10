import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";

const Title = withStyles({
  root: {
    fontSize: "1.5rem",
    height: "30px"
  }
})(function Title({ classes, ...props }) {
  return <Typography className={classes.root} variant="h2" {...props} />;
});

export default Title;

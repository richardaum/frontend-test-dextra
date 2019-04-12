import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";

const Price = withStyles({
  root: { flex: "0 0 auto", fontWeight: "500" }
})(function Price({ classes, className, ...props }) {
  return (
    <Typography
      className={classnames(classes.root, className)}
      component="strong"
      color="textPrimary"
      {...props}
    />
  );
});

export default Price;

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import measures from "../../../infrastructure/theme/measures";

const Title = withStyles({
  root: {
    flex: "1 0 auto",
    margin: `${measures.unit(2)}px 0`,
    display: "flex"
  },
  text: { flex: "1 0 auto" }
})(function Title({ classes, children, text, ...props }) {
  return (
    <Typography
      className={classes.root}
      component="span"
      color="textSecondary"
      {...props}
    >
      <div className={classes.text}>{text}</div>
      {children}
    </Typography>
  );
});

export default Title;

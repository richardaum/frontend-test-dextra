import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import classnames from "classnames";
import measures from "../../theme/measures";

export default withStyles({
  root: {
    flex: 1,
    padding: measures.unit(2),
    display: "flex",
    flexFlow: "column nowrap"
  }
})(function CardItemContent({ classes, className, ...props }) {
  return <div className={classnames(classes.root, className)} {...props} />;
});

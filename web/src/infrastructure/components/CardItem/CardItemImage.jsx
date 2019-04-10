import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles({
  root: {
    height: "100%",
    width: "200px",
    flex: "0 0 auto",
    backgroundRepeat: "no-repeat",
    backgroundImage: props => `url(${props.asset.src})`,
    backgroundPosition: props => props.asset.backgroundPosition,
    backgroundSize: props => props.asset.backgroundSize
  }
})(function CardItemImage({ classes, src, alt, ...props }) {
  return <div className={classes.root} alt={alt} {...props} />;
});

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Picker from "./Picker";
import Cart from "./Cart";

const Container = withStyles({
  root: {
    height: "100%",
    display: "flex"
  }
})(function Container({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

export default function ChooseItem() {
  return (
    <Container>
      <Picker />
      <Cart />
    </Container>
  );
}

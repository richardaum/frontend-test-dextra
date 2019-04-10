import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import classnames from "classnames";
import color from "../../theme/color";
import measures from "../../theme/measures";

const Cell = withStyles({
  root: {
    width: `calc(50% - ${measures.unit(1)}px)`,
    margin: `${measures.unit(1)}px 0`
  }
})(function Cell({ classes, className, component, ...props }) {
  return React.createElement(component || "li", {
    className: classnames(classes.root, className),
    ...props
  });
});

const Container = withStyles({
  root: {
    height: "125px",
    borderRadius: measures.borderRadius,
    boxShadow: `0 0 0 1px ${color.alto}`,
    display: "flex",
    flexFlow: "row nowrap",
    "&:hover": {
      background: color.concrete,
      cursor: "pointer"
    }
  }
})(function Container({ classes, ...props }) {
  return <div role="button" className={classes.root} {...props} />;
});

export default function CardItem({ children, role, onClick, ...props }) {
  return (
    <Cell {...props}>
      <Container role={role} onClick={onClick}>
        {children}
      </Container>
    </Cell>
  );
}

import React from "react";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import color from "../../../infrastructure/theme/color";
import measures from "../../../infrastructure/theme/measures";

const Cell = withStyles({
  root: {
    width: "calc(50%)"
  }
})(({ classes, className, component, ...props }) => {
  return React.createElement(component || "li", {
    className: classnames(classes.root, className),
    ...props
  });
});

const Container = withStyles({
  root: {
    margin: measures.unit(1),
    minHeight: "125px",
    height: "calc(100% - 20px)",
    borderRadius: measures.borderRadius,
    boxShadow: `0 0 0 1px ${color.alto}`,
    display: "flex",
    flexFlow: "row nowrap",
    "&:hover": {
      background: color.concrete,
      cursor: "pointer"
    }
  }
})(({ classes, ...props }) => {
  return <div className={classes.root} {...props} />;
});

const Image = withStyles({
  root: {
    height: "100%",
    width: "200px",
    flex: "0 0 auto",
    backgroundRepeat: "no-repeat",
    backgroundImage: props => `url(${props.asset.src})`,
    backgroundPosition: props => props.asset.backgroundPosition,
    backgroundSize: props => props.asset.backgroundSize
  }
})(({ classes, src, alt, ...props }) => {
  return <div className={classes.root} alt={alt} {...props} />;
});

const Content = withStyles({
  root: {
    flex: 1,
    padding: measures.unit(1)
  }
})(({ classes, ...props }) => <div className={classes.root} {...props} />);

const Ingredients = withStyles({
  root: {
    marginTop: measures.unit(1),
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  }
})(({ classes, ...props }) => (
  <Typography
    className={classes.root}
    title={props.children}
    component="span"
    variant="body2"
    color="textSecondary"
    {...props}
  />
));

export default withRouter(function Burger({
  imgAsset,
  imgAlt,
  title = "",
  subtitle = "",
  onClick,
  className,
  styles,
  component
}) {
  return (
    <Cell component={component} className={className} styles={styles}>
      <Container onClick={onClick}>
        <Content>
          <Typography component="h1" noWrap title={title}>
            {title.toUpperCase()}
          </Typography>
          <Ingredients>{subtitle}</Ingredients>
        </Content>
        {imgAsset && <Image asset={imgAsset} alt={imgAlt} />}
      </Container>
    </Cell>
  );
});

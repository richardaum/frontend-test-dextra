import React from "react";
import classnames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { formatPrice } from "../../ChooseItem/components/getPrice";
import measures from "../../../infrastructure/theme/measures";

export const OfferTitle = withStyles({
  root: { flex: "1 0 auto" }
})(function OfferTitle({ classes, className, quantity, text, ...props }) {
  return (
    <div className={classnames(classes.root, className)} {...props}>
      <Typography component="span">{quantity}</Typography>
      <Typography component="span">x </Typography>
      <Typography component="span" noWrap>
        {text}
      </Typography>
    </div>
  );
});

export const OfferSubtitle = withStyles({
  root: { flex: "1 0 100%" }
})(function OfferSubtitle({ classes, className, text, ...props }) {
  return (
    <Typography
      className={classnames(classes.root, className)}
      color="textSecondary"
      variant="caption"
      component="div"
      noWrap
      {...props}
    >
      {text}
    </Typography>
  );
});

export const OfferDiscount = withStyles({
  root: { fontWeight: "500", color: props => props.color }
})(function OfferDiscount({ classes, className, price, prefix, ...props }) {
  return (
    <Typography
      className={classnames(classes.root, className)}
      component="strong"
      noWrap
      {...props}
    >
      {prefix}
      {formatPrice(price)}
    </Typography>
  );
});

export default withStyles({
  flex: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    marginBottom: measures.unit(2)
  }
})(function Offer({ classes, className, ...props }) {
  return <div className={classnames(className, classes.flex)} {...props} />;
});

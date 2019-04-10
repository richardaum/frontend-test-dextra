import React from "react";
import Typography from "@material-ui/core/Typography";

export default function CardItemTitle({ children = "" }) {
  return (
    <Typography component="h1" noWrap title={children}>
      {children.toString().toUpperCase()}
    </Typography>
  );
}

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Empty } from "../assets/empty.svg";
import measures from "../../../infrastructure/theme/measures";
import Panel from "../../../infrastructure/components/Panel";

const Content = withStyles({
  root: { margin: "auto", textAlign: "center" }
})(function Content({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

const Title = withStyles({
  root: {
    fontSize: "1.5rem",
    marginTop: measures.unit(3)
  }
})(function Title({ classes, ...props }) {
  return (
    <Typography
      className={classes.root}
      variant="h2"
      color="textSecondary"
      {...props}
    >
      Sua sacola está vazia
    </Typography>
  );
});

const Subtitle = withStyles({
  root: {
    fontSize: "1rem",
    marginTop: measures.unit(2)
  }
})(function Subtitle({ classes, ...props }) {
  return (
    <Typography
      className={classes.root}
      variant="h2"
      color="textSecondary"
      {...props}
    >
      Adicione items
    </Typography>
  );
});

export default function Cart() {
  return (
    <Panel>
      <Content>
        <Empty />
        <Title />
        <Subtitle />
      </Content>
    </Panel>
  );
}

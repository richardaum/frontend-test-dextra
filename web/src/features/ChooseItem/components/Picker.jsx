import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import burgersStore from "../../../infrastructure/stores/burgersStore";
import Burger from "./Burger";
import Cell from "./Cell";
import assets from "../assets";
import measures from "../../../infrastructure/theme/measures";

const CreateYourOwnButton = withStyles({
  root: {
    width: `calc(50% - ${measures.unit(1)}px)`
  }
})(
  withRouter(function CreateYourOwnButton({ classes, history }) {
    const handleCreateClick = useCallback(() => {
      history.push(`/details/custom`);
    });
    return (
      <Cell
        className={classes.root}
        component="div"
        role="button"
        onClick={handleCreateClick}
        title="Monte seu sanduíche"
        subtitle="Use a criatividade e escolha seus ingredientes preferidos"
        imgAsset={assets.custom}
        imgAlt="Create your own burger"
      />
    );
  })
);

const UnorderedList = withStyles({
  root: {
    listStyleType: "none",
    padding: 0,
    margin: `${measures.unit(1)}px 0`,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between"
  }
})(function UnorderedList({ classes, ...props }) {
  return <ul className={classes.root} {...props} />;
});

const Container = withStyles({
  root: {
    margin: "auto",
    padding: measures.unit(1),
    maxWidth: "960px"
  }
})(function Container({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

const Title = withStyles({
  root: { fontSize: "1.5rem" }
})(function Title({ classes, ...props }) {
  return <Typography className={classes.root} variant="h2" {...props} />;
});

export default function Picker() {
  return (
    <Container>
      <Title>Sanduíches</Title>
      <UnorderedList>
        {burgersStore.burgers.map(burger => (
          <Burger key={burger.id} {...burger} />
        ))}
      </UnorderedList>
      <CreateYourOwnButton />
    </Container>
  );
}

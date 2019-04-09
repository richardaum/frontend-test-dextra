import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import burgersStore from "../../../infrastructure/stores/burgersStore";
import Burger from "./Burger";
import Cell from "./Cell";
import assets from "../assets";
import measures from "../../../infrastructure/theme/measures";

const CreateYourOwnButton = withStyles({
  root: {
    marginLeft: measures.unit(1),
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
        subtitle="Escolha seus ingredientes preferidos"
        imgAsset={assets.custom}
        imgAlt="Create your own burger"
      />
    );
  })
);

const UnorderedList = withStyles({
  root: {
    listStyleType: "none",
    padding: measures.unit(1),
    display: "flex",
    flexFlow: "row wrap"
  }
})(function UnorderedList({ classes, ...props }) {
  return <ul className={classes.root} {...props} />;
});

const Container = withStyles({
  root: {
    margin: "auto",
    maxWidth: "960px"
  }
})(function Container({ classes, ...props }) {
  return <div className={classes.root} {...props} />;
});

export default function ChooseItem() {
  return (
    <Container>
      <UnorderedList>
        {burgersStore.burgers.map(burger => (
          <Burger key={burger.id} {...burger} />
        ))}
      </UnorderedList>
      <CreateYourOwnButton />
    </Container>
  );
}

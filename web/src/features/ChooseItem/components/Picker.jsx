import React, { useCallback } from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import burgersStore from "../../../infrastructure/stores/burgersStore";
import Burger from "./Burger";
import assets from "../assets";
import measures from "../../../infrastructure/theme/measures";
import Title from "../../../infrastructure/components/Title";
import {
  CardItem,
  CardItemContent,
  CardItemTitle,
  CardItemSubtitle,
  CardItemImage
} from "../../../infrastructure/components/CardItem";

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
      <CardItem
        component="button"
        className={classes.root}
        onClick={handleCreateClick}
      >
        <CardItemContent>
          <CardItemTitle>Monte seu sanduíche</CardItemTitle>
          <CardItemSubtitle>
            Use a criatividade e escolha seus ingredientes preferidos
          </CardItemSubtitle>
        </CardItemContent>
        <CardItemImage asset={assets.custom} />
      </CardItem>
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

export const Container = withStyles({
  root: {
    margin: "0 auto",
    padding: measures.unit(3),
    maxWidth: "960px"
  }
})(function Container({ classes, className, ...props }) {
  return <div className={classnames(classes.root, className)} {...props} />;
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

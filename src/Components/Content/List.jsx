import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useSelector } from "react-redux";
import { filterElementsArray } from "../../helpers/filterElements";
import Header from "../Header/Header";
import ChangeItemForm from "./Form/Form";
import { mainContext } from "./Content";
import { useContext } from "react";
import AddItemForm from "./Form/AddItemForm";
import Item from "./ListItem.jsx/ListItem";
import { useStyles } from "./style/style";

export default function ToDoList({ list }) {
  const classes = useStyles();
  const { matching } = useSelector((state) => state.search);
  const { currentId, showInput } = useContext(mainContext);

  return (
    <List className={classes.root}>
      <Header classes={classes} />
      {showInput && (
        <ListItem
          key="0"
          role={undefined}
          dense
          button
          className={classes.item}
        >
          <AddItemForm />
        </ListItem>
      )}
      {filterElementsArray(list, matching)
        .map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              className={classes.item}
            >
              {currentId === value.id ? (
                <ChangeItemForm id={value.id} />
              ) : (
                <Item value={value} labelId={labelId} />
              )}
            </ListItem>
          );
        })
        .reverse()}
    </List>
  );
}

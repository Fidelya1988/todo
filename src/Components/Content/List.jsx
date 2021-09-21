import React from "react";
// import { useStyles } from "./style/style";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { setSelected } from "../../store/listReducer";
import { useDispatch, useSelector } from "react-redux";
import EditItemButton from "./EditItemButton/EditItemButton";
import { filterElementsArray } from "../../helpers/filterElements";
import Header from "../Header/Header";
import ChangeItemForm from "./Form/Form";
import { mainContext } from "./Content";
import { useContext } from "react";
import AddItemForm from "./Form/AddItemForm";
import CompleteButtons from "./CompleteButtons/CompleteButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: theme.palette.background.paper,

    borderBottom: "none",
    marginTop: "0",
    paddingTop: "0",
  },

  item: {
    borderBottom: "1px solid gray",
    marginTop: "0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "black",
    color: "White",
  },
  content: {
    padding: "0.6rem",
  },
}));

export default function ToDoList({ list }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { matching } = useSelector((state) => state.search);
  const { currentId, showInput } = useContext(mainContext);
  const handleChange = React.useCallback(
    (id) => {
      dispatch(setSelected(id));
    },
    [dispatch]
  );

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
                <>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      onChange={() => {
                        handleChange(value.id);
                      }}
                    />
                  </ListItemIcon>
                  <EditItemButton id={value.id} />

                  <CompleteButtons completed={value.completed} id={value.id} />

                  <ListItemText
                    id={labelId}
                    primary={value.content}
                    className={classes.content}
                  />

                  <ListItemIcon> {value.date} </ListItemIcon>
                </>
              )}
            </ListItem>
          );
        })
        .reverse()}
    </List>
  );
}

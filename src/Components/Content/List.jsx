import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { setSelected } from "../../store/listReducer";
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useDispatch, useSelector } from "react-redux";
import EditItem from "./EditItem/EditItem";
import { filterElementsArray } from "../../helpers/filterElements";
import Header from "../Header/Header";
import Input from "./Form/Input/Input";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",

    backgroundColor: theme.palette.background.paper,
  },

  item: {
    borderBottom: "1px solid gray",
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

  const handleChange = React.useCallback(
    (id) => {
      dispatch(setSelected(id));
    },
    [dispatch, setSelected]
  );

  return (
    <List className={classes.root}>
      <Header classes={classes} />
      <ListItem
            key='0'
            role={undefined}
            dense
            button
            className={classes.item}
          >
          <textarea
        id="text"
        name="text"
        // onChange={handleChange}
        // onBlur={submit}
        autoFocus
        handleSubmit
        // value = {value}
      ></textarea>
</ListItem>
      {filterElementsArray(list, matching).map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            role={undefined}
            dense
            button
            className={classes.item}
          >
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
            <EditItem id={value.id} />

            <ListItemIcon> {value.date} </ListItemIcon>

            <ListItemText
              id={labelId}
              primary={value.content}
              className={classes.content}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

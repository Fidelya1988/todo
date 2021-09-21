import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { setSelected } from "../../../store/listReducer";
import { useDispatch } from "react-redux";
import EditItemButton from "../EditItemButton/EditItemButton";
import CompleteButtons from "../CompleteButtons/CompleteButtons";
import { useStyles } from "../style/style";

export default function Item({ value, labelId }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = React.useCallback(
    (id) => {
      dispatch(setSelected(id));
    },
    [dispatch]
  );

  return (
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
  );
}

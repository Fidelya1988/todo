import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { mainContext } from "../Content/Content";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "70%",

//     backgroundColor: theme.palette.background.paper,
//   },

//   item: {
//     borderBottom: "1px solid gray",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     background: "black",
//     color: "White",
//   },
//   content: {
//     padding: "0.6rem",
//   },
// }));

export default function Header({ classes }) {
  const { handleDalete, saveNewItem, showInput, handleCreate } =
    useContext(mainContext);
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      saveNewItem(values.text);
    },
  });

  const { selected } = useSelector((state) => state.list);

  return (
    <>
      <ListItem className={classes.header}>
        <ListItemIcon style={{ color: "White" }}>
          {selected.length > 0 && (
            <DeleteSharpIcon
              color={"secondary"}
              onClick={(e) => {
                handleDalete(e);
              }}
            />
          )}
        </ListItemIcon>{" "}
        <ListItemIcon>
          <input></input>
        </ListItemIcon>{" "}
        <ListItemIcon style={{ color: "White" }} onClick={handleCreate}>
          {" "}
          +
        </ListItemIcon>
      </ListItem>
      {showInput && (
        <form onSubmit={formik.handleSubmit}>
          <textarea
            id="text"
            name="text"
            onChange={formik.handleChange}
            // value={formik.values.text}
          />

          <button type="Submit">Save</button>
        </form>
      )}
    </>
  );
}

import React, { useContext } from "react";
import Search from "./Search/Search";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { mainContext } from "../Content/Content";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
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
        <Search/>
        </ListItemIcon>
        <ListItemIcon style={{ color: "White" }} onClick={handleCreate}>
          {" "}
          +
        </ListItemIcon>
      </ListItem>
      {showInput && (
        <form onSubmit={formik.handleSubmit} style={{ width: "100%", display: 'flex'}}>
          <input
            id="text"
            name="text"
            onChange={formik.handleChange}
            style={{ width: "95%",  position: 'relative', height: '5rem'}}
            autoFocus
          />
         
         
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={() => formik.handleSubmit()}
            color="success"
            // style={{marginRight:'auto', marginLeft:'auto'}}
          >
            Save
          </Button>
        </form>
      )}
    </>
  );
}

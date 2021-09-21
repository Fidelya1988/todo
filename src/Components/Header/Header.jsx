import React, { useContext } from "react";
import Search from "./Search/Search";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { mainContext } from "../Content/Content";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import CreateItemForm from "../Content/Form/Form";
import CreateNewItemButton from "./CreateNewItemButton/CreateNewItemButton";
export default function Header({ classes }) {
  const { handleDalete, saveNewItem, showInput, handleCreate } =
    useContext(mainContext);

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
          <Search />
        </ListItemIcon>
        <CreateNewItemButton />
      </ListItem>
    </>
  );
}

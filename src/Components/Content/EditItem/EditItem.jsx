import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { setSelected } from "../../store/listReducer";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { changeListItem } from "../../../store/listReducer";
import EditItemForm from '../Form/Form'
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

export default function EditItem({
  list,
  handleCreate,
  showInput,
  saveNewItem,
  handleDalete,
}) {
    const [showTextarea, setShowTextarea] = React.useState()
  const dispatch = useDispatch();
  const classes = useStyles();
  // const formik = useFormik({
  //   initialValues: {

  //     content: "",
  //   },
  //   onSubmit: (values) => {
  //   dispatch(changeListItem({content: values.content, id: } ))
  //   },
  // });


  const {selected} = useSelector(state=>state.list)

  const handleClick = React.useCallback(
    (e) => {
      dispatch(setSelected(id));
     
    },
    [dispatch, setSelected]
  );


  return (
   <div>
    
    

            <ListItemIcon> <span onClick={(e)=>{console.log(e.target.id)}}>edite</span> <input/></ListItemIcon>
           
 </div>
  );
}

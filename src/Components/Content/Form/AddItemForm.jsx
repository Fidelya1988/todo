import React , {useState, useContext} from "react";
import { useFormik } from "formik";
import { getUniqueId } from "../../../helpers/getUniquId";
import { addListItem } from "../../../store/listReducer";
import { utc } from "../../../helpers/utc";
import Input from "./Input/Input";
import { mainContext } from "../Content";
import styles from './form.module.css'
import { useDispatch } from "react-redux";

export default function AddItemForm() {
    const dispatch =  useDispatch()
  const {setShowInput} = useContext(mainContext)
   

  const formik = useFormik({
    initialValues: {
      text:"",
    },
    onSubmit: (values) => {
        dispatch(addListItem({id: getUniqueId(),content:values.text, date: utc }))
        setShowInput(false)
     
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
     className ={styles.form}
    >
        <Input handleChange={formik.handleChange} submit={formik.handleSubmit} />
   
      {/* <Button
        variant="contained"
        // href="#contained-buttons"
        onClick={() => formik.handleSubmit()}
        color="secondary"
        // style={{marginRight:'auto', marginLeft:'auto'}}
      >
        Save
      </Button>  */}
    </form>
  );
}


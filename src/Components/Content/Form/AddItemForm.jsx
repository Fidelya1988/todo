import React , {useState, useContext} from "react";
import { useFormik } from "formik";
import { getUniqueId } from "../../../helpers/getUniquId";
import { addListItem } from "../../../store/listReducer";
import { utc } from "../../../helpers/utc";
import Input from "./Input/Input";
import { mainContext } from "../Content";
// import styles from './form.module.css'
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
      handleSubmit(values.text) ;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
     className ={styles.form}
    >
        <Input handleChange={formik.handleChange} submit={formik.handleSubmit} id={id} value={formik.values.text}/>
   
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

import Input from "./Input/Input";
import styles from './form.module.css'
import { useSelector } from "react-redux";
import { getContent } from "../../../helpers/getContent";
export default function Form({ handleSubmit, id }) {

    const saveNewItem = useCallback((text)=> {
        dispatch(addListItem({id: getUniqueId(),content:text, date: utc }))
        setShowInput(false)
    
      },[dispatch, addListItem, setShowInput])
  const formik = useFormik({
    initialValues: {
      text:"",
    },
    onSubmit: (values) => {
 
      handleSubmit(values.text, prevValue) ;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
     className ={styles.form}
    >
        <Input handleChange={formik.handleChange} submit={formik.handleSubmit} id={id} value={formik.values.text}/>
   
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

import React from "react";
import { useFormik } from "formik";

import Input from "./Input/Input";
import styles from './form.module.css'
import { useSelector } from "react-redux";
import { getContent } from "../../../helpers/getContent";
export default function Form({ handleSubmit, id }) {
    const {list}= useSelector(state=>state.list)
//  console.log(list)
//  console.log(getContent(id,list))
  const formik = useFormik({
    initialValues: {
      text:id? getContent(id,list): 'type..',
    },
    onSubmit: (values) => {
     const prevValue =  getContent(id,list)
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

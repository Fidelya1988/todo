import React from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
export default function Form({ handleSubmit }) {
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      
      handleSubmit(values.text);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ width: "100%", display: "flex" }}
    >
      <input
        id="text"
        name="text"
        onChange={formik.handleChange}
        style={{ width: "95%", position: "relative", height: "5rem" }}
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
  );
}

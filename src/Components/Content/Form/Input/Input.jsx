import * as React from "react";

import Paper from "@mui/material/Paper";
import styles from "./input.module.css";

export default function Input({ handleChange, submit, value}) {
    
  return (

      <textarea
        id="text"
        name="text"
        onChange={handleChange}
        onBlur={submit}
        autoFocus
       
        value = {value}
      ></textarea>

  );
}

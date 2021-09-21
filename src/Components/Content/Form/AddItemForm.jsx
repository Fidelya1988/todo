import React, { useContext, useCallback } from "react";
import { useFormik } from "formik";
import { getUniqueId } from "../../../helpers/getUniquId";
import { addListItem } from "../../../store/listReducer";
import { utc } from "../../../helpers/utc";
import Input from "./Input/Input";
import { mainContext } from "../Content";
import styles from "./form.module.css";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

export default function AddItemForm() {
  const dispatch = useDispatch();
  const { setShowInput, list } = useContext(mainContext);

  const hanldeClose = useCallback(() => {
    setShowInput(false);
  }, [setShowInput]);

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      dispatch(
        addListItem({ id: getUniqueId(list), content: values.text, date: utc })
      );
      setShowInput(false);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Input handleChange={formik.handleChange} />

        <Button
          variant="contained"
          type="submit"
          color="secondary"
          style={{ height: "2rem" }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          type="click"
          onClick={hanldeClose}
          style={{
            color: "white",
            background: "black",
            marginLeft: "0.4rem",
            height: "2rem",
          }}
        >
          Cancel
        </Button>
      </form>
    </>
  );
}

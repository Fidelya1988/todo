import { useCallback, useContext } from "react";
import { useFormik } from "formik";
import { changeListItem } from "../../../store/listReducer";
import Input from "./Input/Input";
import styles from "./form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../../../helpers/getContent";
import { utc } from "../../../helpers/utc";
import { mainContext } from "../Content";

export default function Form({ id }) {
  const { list } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const { setCurrentId } = useContext(mainContext);

  const handleSubmit = useCallback(
    (value, prevValue) => {
      if (value !== prevValue)
        dispatch(changeListItem({ utc, id, content: value }));
      setCurrentId(null);
    },
    [id, dispatch, setCurrentId]
  );

  const formik = useFormik({
    initialValues: {
      text: getContent(id, list),
    },
    onSubmit: (values) => {
      const prevValue = getContent(id, list);
      handleSubmit(values.text, prevValue);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        handleChange={formik.handleChange}
        submit={formik.handleSubmit}
        id={id}
        value={formik.values.text}
      />
    </form>
  );
}

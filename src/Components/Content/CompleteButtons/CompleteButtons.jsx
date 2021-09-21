import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { setCompleted } from "../../../store/listReducer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useEffect, useState } from "react";
export default function CompleteButtons({ completed, id }) {
  console.log(completed);
  const dispatch = useDispatch();
  const [taskState, setTaskState] = useState(false);
  useEffect(() => {
    taskState && dispatch(setCompleted(id));
    setTaskState(false);
  }, [taskState, dispatch]);
  return (
    <ListItemIcon onClick={() => setTaskState(true)}>
      {completed ? (
        <CheckCircleIcon color={"success"} />
      ) : (
        <RadioButtonUncheckedOutlinedIcon />
      )}
    </ListItemIcon>
  );
}

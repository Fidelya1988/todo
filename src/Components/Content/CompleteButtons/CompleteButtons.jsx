import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { setCompleted } from "../../../store/listReducer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useEffect, useState } from "react";
import { utc } from "../../../helpers/utc";
export default function CompleteButtons({ completed, id }) {

  const dispatch = useDispatch();
  const [taskState, setTaskState] = useState(false);
  useEffect(() => {
    taskState && dispatch(setCompleted({id, date:utc}));
    setTaskState(false);
  }, [taskState, dispatch,id]);
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

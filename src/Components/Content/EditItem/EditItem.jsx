import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useDispatch,  } from "react-redux";
import { changeListItem } from "../../../store/listReducer";
import EditItemForm from "../Form/Form";
import { utc } from "../../../helpers/utc";
import { Button } from "@material-ui/core";
export default function EditItem({ id }) {

  const [currentId, setCurrentId] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = React.useCallback(() => {
    setCurrentId(id);
  }, [setCurrentId, id]);
  const handleSubmit = React.useCallback(
    (content, value) => {
      if(content !== value) dispatch(changeListItem({ utc, id, content }));
      
      setCurrentId(null);
     
    },
    [changeListItem, id]
  );

  return (
    <div>
      <ListItemIcon>
        <Button onClick={handleClick}  color="secondary"> edite</Button>
        {currentId === id && <EditItemForm handleSubmit={handleSubmit} id={id}/>}
      </ListItemIcon>
    </div>
  );
}

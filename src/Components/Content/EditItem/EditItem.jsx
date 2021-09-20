import React, {useContext} from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import { useDispatch} from "react-redux";
import { changeListItem } from "../../../store/listReducer";
import EditItemForm from "../Form/Form";
import { utc } from "../../../helpers/utc";
export default function EditItem({ id }) {

  const [currentId, setCurrentId] = React.useState(null)
  const dispatch = useDispatch();
 

  const handleClick = React.useCallback(() => {
    setCurrentId(id);
    
  }, [setCurrentId, id]);
  const handleSubmit = React.useCallback(
    (content) => {
     
      dispatch(changeListItem({ utc,id, content }));
      setCurrentId(null)
    },
    [changeListItem, id]
  );

  return (
    <div>
      <ListItemIcon>
        
        <span onClick={handleClick}>edite</span>
        {currentId ===id && <EditItemForm handleSubmit={handleSubmit} />}
      </ListItemIcon>
    </div>
  );
}

import React,{useContext} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useDispatch,  } from "react-redux";
import { changeListItem } from "../../../store/listReducer";
import EditItemForm from "../Form/Form";
import { utc } from "../../../helpers/utc";
import { Button } from "@material-ui/core";
import { mainContext } from "../Content";
export default function EditItemButton({ id }) {

 const {setCurrentId }= useContext(mainContext);
  const dispatch = useDispatch();

;
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
        <Button onClick={()=> setCurrentId(id)}  color="secondary"> edite</Button>
        {/* {currentId === id && <EditItemForm handleSubmit={handleSubmit} id={id}/>} */}
      </ListItemIcon>
    </div>
  );
}

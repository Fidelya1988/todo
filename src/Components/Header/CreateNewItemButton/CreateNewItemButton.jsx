import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useContext, useCallback } from "react";
import { mainContext } from "../../Content/Content";
import AddIcon from '@mui/icons-material/Add';

export default function CreateNewItemButton() {
  const { setShowInput, showInput } = useContext(mainContext);
  const toggleShowInput = useCallback(()=> {
    !showInput&& setShowInput(true)
   },[showInput, setShowInput])
  
   return (
    <ListItemIcon>
      <span onClick={toggleShowInput} style={{ color: "White", fontSize: '1rem' }}>
          {!showInput? <AddIcon />: null}
      </span>
    </ListItemIcon>
  );
}

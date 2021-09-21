import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useContext, useCallback } from "react";
import { mainContext } from "../../Content/Content";
export default function CreateNewItemButton() {
  const { setShowInput, showInput } = useContext(mainContext);
   const toggleShowInput = useCallback(()=> {
    !showInput&& setShowInput(true)
   },[showInput])
  return (
    <ListItemIcon style={{ color: "White" }} >
      <span onClick={toggleShowInput}>{!showInput? '+': null}</span>
    </ListItemIcon>
  );
}

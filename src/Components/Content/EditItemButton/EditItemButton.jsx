import { useContext, useCallback } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@mui/icons-material/Edit";
import { changeListItem } from "../../../store/listReducer";

import { mainContext } from "../Content";
export default function EditItemButton({ id }) {
  const { setCurrentId, setShowInput } = useContext(mainContext);

  const handleClick = useCallback(() => {
    setShowInput(false);
    setCurrentId(id);
  }, [changeListItem, setShowInput]);

  return (
    <div>
      <ListItemIcon>
        <EditIcon onClick={handleClick} />
      </ListItemIcon>
    </div>
  );
}

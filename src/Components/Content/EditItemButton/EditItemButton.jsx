import { useContext, useCallback } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@mui/icons-material/Edit";
import { mainContext } from "../Content";

export default function EditItemButton({ id }) {
  const { setCurrentId, setShowInput } = useContext(mainContext);

  const handleClick = useCallback(() => {
    setShowInput(false);
    setCurrentId(id);
  }, [setShowInput, id, setCurrentId]);

  return (
    <div>
      <ListItemIcon>
        <EditIcon onClick={handleClick} />
      </ListItemIcon>
    </div>
  );
}

import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useContext } from "react";
import { mainContext } from "../../Content/Content";
export default function CreateNewItemButton() {
  const { setShowInput } = useContext(mainContext);
  return (
    <ListItemIcon style={{ color: "White" }} onClick={() => setShowInput(true)}>
      +
    </ListItemIcon>
  );
}

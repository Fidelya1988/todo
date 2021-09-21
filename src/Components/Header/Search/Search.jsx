import { useDispatch } from "react-redux";
import { useCallback,  useState } from "react";
import {setMatching} from "../../../store/searchReducer";
import styles from "./search.module.css";

const Search = () => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
      dispatch(setMatching(e.target.value));
      setChange(true);
      e.target.value === "" && setChange(false);
    },[dispatch]
  );
 
  return (
    <>
      <div className={styles.search}>
        <input
          className={styles.input}
          id="text"
          name="text"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search"
          autoFocus
          style={{ background: change && "white" }}
        />
      </div>
    </>
  );
};

export default Search;

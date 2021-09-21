import List from "./List"
import { useState, useCallback } from "react";
import {useSelector, useDispatch } from 'react-redux'
import {deleteListItem } from "../../store/listReducer";
import { createContext } from "react";

export const  mainContext =  createContext()

export default function Content() {

  const {list} = useSelector(state=> state.list)
  
  const [ showInput, setShowInput] = useState(false)
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch()
  

  const handleDalete = useCallback(()=> {
     
    dispatch(deleteListItem())
  },[dispatch, deleteListItem])
  

  
  return (
    <mainContext.Provider value ={{handleDalete, showInput, setShowInput, currentId, setCurrentId}}>
    <div>
      <List list={list}    />
    </div>
    </mainContext.Provider>
  );
}

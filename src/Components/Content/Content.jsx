import List from "./List"
import { useState, useCallback } from "react";
import {useSelector, useDispatch } from 'react-redux'
import { addListItem, deleteListItem } from "../../store/listReducer";
import { createContext } from "react";
import { utc } from "../../helpers/utc";

export const  mainContext =  createContext()
const getUniqueId = ()=> {
    return String(Math.floor(Math.random()*200))
}

export default function Content() {

  const {list} = useSelector(state=> state.list)
  const [ showInput, setShowInput] = useState(false)
  const dispatch = useDispatch()
  const handleCreate = useCallback(()=> {
    setShowInput(true)
  },[setShowInput])
  const handleDalete = useCallback(()=> {
     
    dispatch(deleteListItem())
  },[dispatch, deleteListItem])
  const saveNewItem = useCallback((text)=> {
    dispatch(addListItem({id: getUniqueId(),content:text, date: utc }))
    setShowInput(false)

  },[dispatch, addListItem, setShowInput])
  return (
    <mainContext.Provider value ={{handleDalete, saveNewItem, showInput, handleCreate}}>
    <div>
      <List list={list}    />
    </div>
    </mainContext.Provider>
  );
}

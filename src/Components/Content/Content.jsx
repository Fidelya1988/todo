import List from "./List"
import { useState, useCallback } from "react";
import {useSelector, useDispatch } from 'react-redux'
import { addListItem, deleteListItem } from "../../store/listReducer";
const getUniqueId = ()=> {
    return String(Math.floor(Math.random()*200))
}
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'.');
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
    <div>
      <List list={list}  handleCreate={handleCreate} showInput={showInput}  saveNewItem= {saveNewItem} handleDalete={handleDalete}/>
    </div>
  );
}
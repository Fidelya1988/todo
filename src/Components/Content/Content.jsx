import List from "./List"
import { useState} from "react";
import {useSelector } from 'react-redux'

import { createContext } from "react";

export const  mainContext =  createContext()

export default function Content() {

  const {list} = useSelector(state=> state.list)
  
  const [ showInput, setShowInput] = useState(false)
  const [currentId, setCurrentId] = useState(null);



  

  
  return (
    <mainContext.Provider value ={{ showInput, setShowInput, currentId, setCurrentId, list}}>
    <div>
      <List list={list}    />
    </div>
    </mainContext.Provider>
  );
}

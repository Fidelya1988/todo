import { createSlice } from "@reduxjs/toolkit";


const listSlice = createSlice({
  name: "list",
  initialState: {
    listBasket: [],
    list: [
      {
        content: "Food",
        id: "1",
       
      },
      
    ],
  },
  reducers: {
    addListItem(state, action) {
      state.list.push(action.payload);
    },
    deleteListItem(state, action) {
      state.list = state.list.filter(
        (el) =>{
          el.id === action.payload&& state.listBacket.push(el)
         return el.id !== action.payload&& el
        });
    },
  
    changeListItem(state, action) {
      state.list.forEach((el) =>
        el.id === action.payload.id && el.content === action.payload.content
          
      );
    },
  },
});

export default listSlice.reducer;
export const { addListItem, deleteListItem, changeListItem } =
  listSlice.actions;

import { createSlice, current } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    selected: [],
    list: [
      {
        date: "16.09.2021",
        content: "Call 0962783838 and order books",
        id: "1",
        completed: true
      },
      {
        date: "17.09.2021",
        content:
          "buy food",
        id: "2",
        completed: false
      },
      {
        date: "17.09.2021",
        content:
          "Сlean the room",
        id: "3",
        completed: false
      },
    ],
  },
  reducers: {
    addListItem(state, action) {
      state.list.push({...action.payload, completed: false});
    },
    setSelected(state, action) {
      const canceledIndex = state.selected.indexOf(action.payload);

      action.payload === null
        ? (state.selected = [])
        : canceledIndex === -1
        ? state.selected.push(action.payload)
        : state.selected.splice(canceledIndex, 1);
    },
    setCompleted(state, action) {
      
      const newList = current(state).list.map(item=>{
        const id = action.payload.id
        const  complete = ()=> item.completed? false: true
        return item.id ===id? {...item, completed: complete(), date: action.payload.date}: item
      })

      newList.sort(function(a,b){
        if(a.completed < b.completed) return 1
        if(a.completed > b.completed) return -1
        return 0
      })
  
      state.list = newList;
    },

    deleteListItem(state) {
      const newList = [];

      for (let i = 0; i < state.list.length; i++) {
        const id = state.selected.find((el) => state.list[i].id === el);

        state.list[i].id !== id && newList.push(current(state.list[i]));
      }

      state.list = newList;
    },

    changeListItem(state, action) {
      console.log(action.payload);
      const changedList = state.list.map((el) =>
        el.id === action.payload.id
          ? { ...el, date: action.payload.utc, content: action.payload.content }
          : el
      );
      state.list = changedList;
    },
  },
});

export default listSlice.reducer;
export const { addListItem, deleteListItem, changeListItem, setSelected, setCompleted } =
  listSlice.actions;

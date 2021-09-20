import { createSlice, current } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    selected: [],
    list: [
      {
        date: "16.09.2021",
        content: "Food",
        id: "1",
      },
      {
        date: "17.09.2021",
        content:
          "Порада. Шукати результати лише українською мовою. Мову пошуку можна вибрати на сторінці Налаштування",
        id: "2",
      },
      {
        date: "17.09.2021",
        content:
          "Порада. Шукати результати лише українською мовою. Мову пошуку можна вибрати на сторінці Налаштування",
        id: "3",
      },
    ],
  },
  reducers: {
    addListItem(state, action) {
      state.list.push(action.payload);
    },
    setSelected(state, action) {
      const canceledIndex = state.selected.indexOf(action.payload);

      canceledIndex === -1
        ? state.selected.push(action.payload)
        : state.selected.splice(canceledIndex, 1);
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
export const { addListItem, deleteListItem, changeListItem, setSelected } =
  listSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  clickedId: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state, action) => {
      state.value = action.payload;
    },
    clicked2: (state, action) =>{
      state.clickedId.push(action.payload);
    },
    unmark: (state, action)=>{
      if (state.clickedId.indexOf(action.payload) > -1) { 
        state.clickedId.splice(state.clickedId.indexOf(action.payload), 1);
      }
      
    }
  },
});

export const { increment, decrement, clicked2, unmark } = counterSlice.actions;

export default counterSlice.reducer;

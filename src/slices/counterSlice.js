import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // slice name
  initialState: {value: 0},
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions and reducer
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;

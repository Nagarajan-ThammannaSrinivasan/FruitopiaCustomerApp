import {createSlice} from '@reduxjs/toolkit';

const drawerSlice = createSlice({
  name: 'drawer', // slice name
  initialState: {value: false},
  reducers: {
    openDrawer: state => {
      state.value = true;
    },
    closeDrawer: state => {
      state.value = false;
    },
    toggleDrawer: state => {
      state.value = !state.value;
    },
  },
});

// Export actions and reducer
export const {openDrawer, closeDrawer, toggleDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;

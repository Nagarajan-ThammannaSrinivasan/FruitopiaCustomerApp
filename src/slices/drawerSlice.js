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
      console.log('Toggling drawer from', state.value);
      state.value = !state.value;
      console.log('Toggling drawer from', state.value);
    },
  },
});

// Export actions and reducer
export const {openDrawer, closeDrawer, toggleDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;

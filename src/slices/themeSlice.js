import {createSlice} from '@reduxjs/toolkit';
import {lightTheme, darkTheme} from '../theme/theme';

const themeSlice = createSlice({
  name: 'theme', // slice name
  initialState: {
    themeMode: 'light',
    theme: lightTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      state.themeMode = action.payload.themeMode;
      state.theme = action.payload.themeMode == 'dark' ? darkTheme : lightTheme;
    },
    toggleTheme: state => {
      if (state.themeMode == 'light') {
        state.themeMode = 'dark';
        state.theme = darkTheme;
      } else {
        state.themeMode = 'light';
        state.theme = lightTheme;
      }
    },
  },
});

export const {toggleTheme, setTheme} = themeSlice.actions;
export default themeSlice.reducer;

import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setTheme} from '../slices/themeSlice';
import {useColorScheme} from 'react-native';

const ThemeInitializer = ({children}) => {
  const scheme = 'light';
  // const scheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setTheme({
        themeMode: scheme,
      }),
    );
  }, [scheme]);
  return children;
};

export default ThemeInitializer;

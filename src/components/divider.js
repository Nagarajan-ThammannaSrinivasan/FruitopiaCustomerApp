import {View} from 'react-native';
import {useSelector} from 'react-redux';

const Divider = () => {
  const {themeMode, theme} = useSelector(state => state.theme);

  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.drawerSectionDividerColor,
        opacity: 0.6,
        marginVertical: 8,
      }}
    />
  );
};

export default Divider;

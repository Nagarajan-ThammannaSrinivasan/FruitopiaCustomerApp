import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {useWindowDimensions} from 'react-native';
import RootStack from './rootStack';
import {constant} from '../constants';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const {height, width} = useWindowDimensions();
  const {themeMode, theme} = useSelector(state => state.theme);
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer></CustomDrawer>}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: theme.backgroundColor},
        backgroundColor: theme.backgroundColor,
        detachPreviousScreen: false,
        contentStyle: {
          backgroundColor: theme.drawerBackgroundColor,
        },
        drawerStyle: {
          width: constant.drawerWidthFactor * width,
          backgroundColor: theme.drawerBackgroundColor,
        },
        sceneContainerStyle: {backgroundColor: theme.backgroundColor},
      }}>
      <Drawer.Screen
        name="MainStack"
        component={RootStack}
        options={{
          // make Stack fill the rest of the screen
          drawerType: 'front',
          overlayColor: 'transparent',
        }}
      />
    </Drawer.Navigator>
  );
}

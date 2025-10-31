import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@react-native-vector-icons/material-icons';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {constant} from '../constants';

import Header from './Header';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import OffersScreen from '../screens/OffersScreen';
import ReferralsScreen from '../screens/ReferralsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        header: () => <Header></Header>,
        tabBarStyle: {
          backgroundColor: theme.bottomTabBackgroundColor,
          height: 60,
        },
        tabBarActiveTintColor: theme.bottomTabActiveLabelColor,
        tabBarInactiveTintColor: theme.bottomTabLabelColor,
        tabBarIcon: ({color, size}) => {
          const icons = {
            Home: 'home',
            Products: 'shopping-bag',
            Offers: 'card-giftcard',
            Referrals: 'group-add',
            Calendar: 'calendar-today',
            Cart: 'shopping-cart',
          };

          return (
            <MaterialIcons name={icons[route.name]} color={color} size={size} />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: constant.fonts.NunitoSansRegular,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: t('home')}}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{title: t('products')}}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{title: t('offers')}}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{title: t('calendar')}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{title: t('cart')}}
      />
    </Tab.Navigator>
  );
}

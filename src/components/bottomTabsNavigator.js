import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Products from './products';
import Offers from './offers';
import Referrals from './referrals';
import Calendar from './calendar';
import Cart from './cart';
import Header from './header';
import {MaterialIcons} from '@react-native-vector-icons/material-icons';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

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
          fontFamily: 'nunito-sans',
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{title: t('home')}} />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{title: t('products')}}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{title: t('offers')}}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{title: t('calendar')}}
      />
      <Tab.Screen name="Cart" component={Cart} options={{title: t('cart')}} />
    </Tab.Navigator>
  );
}

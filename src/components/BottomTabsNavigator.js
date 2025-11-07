import React, {Suspense, lazy} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@react-native-vector-icons/material-icons';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {constant} from '../constants';
import Header from './Header';
import CustomActivityIndicator from './CustomActivityIndicator';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const homeScreenLazy = lazy(() => import('../screens/HomeScreen'));
  const productsScreenLazy = lazy(() => import('../screens/ProductsScreen'));
  const offersScreenLazy = lazy(() => import('../screens/OffersScreen'));
  const calendarScreenLazy = lazy(() => import('../screens/CalendarScreen'));
  const cartScreenLazy = lazy(() => import('../screens/CartScreen'));

  return (
    <Suspense fallback={<CustomActivityIndicator />}>
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
              <MaterialIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: constant.fonts.NunitoSansRegular,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={homeScreenLazy}
          options={{title: t('home')}}
        />
        <Tab.Screen
          name="Products"
          component={productsScreenLazy}
          options={{title: t('products')}}
        />
        <Tab.Screen
          name="Offers"
          component={offersScreenLazy}
          options={{title: t('offers')}}
        />
        <Tab.Screen
          name="Calendar"
          component={calendarScreenLazy}
          options={{title: t('calendar')}}
        />
        <Tab.Screen
          name="Cart"
          component={cartScreenLazy}
          options={{title: t('cart')}}
        />
      </Tab.Navigator>
    </Suspense>
  );
}

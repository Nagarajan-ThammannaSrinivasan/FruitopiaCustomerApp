import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import BottomTabsNavigator from './bottomTabsNavigator';
import Referrals from './referrals';
import Subscriptions from './drawer/subscriptions';
import OrderHistory from './drawer/orderHistory';
import TipDeliveryBoy from './drawer/tipDeliveryBoy';
import ManageAddresses from './drawer/manageAddresses';
import DeliveryInstructions from './drawer/deliveryInstructions';
import Wallet from './drawer/wallet';
import FAQs from './drawer/faqs';
import MyTickets from './drawer/myTickets';
import Notifications from './drawer/notifications';
import SubscriptionPlans from './subscriptionPlans';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.headerTextColor,
        detachPreviousScreen: false,
        backgroundColor: theme.backgroundColor,
        animation: 'slide_from_right',
        headerStyle: {
          backgroundColor: theme.headerBackgroundColor,
          color: theme.headerTextColor,
        },
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{headerShown: false}} // keep custom header if needed
      />
      <Stack.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{title: t('Subscriptions')}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{title: t('orderHistory')}}
      />
      <Stack.Screen
        name="TipDeliveryBoy"
        component={TipDeliveryBoy}
        options={{title: t('tipDeliveryBoy')}}
      />
      <Stack.Screen
        name="ManageAddresses"
        component={ManageAddresses}
        options={{title: t('manageAddresses')}}
      />
      <Stack.Screen
        name="DeliveryInstructions"
        component={DeliveryInstructions}
        options={{title: t('deliveryInstructions')}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{title: t('wallet')}}
      />

      <Stack.Screen
        name="Referrals"
        component={Referrals}
        options={{title: t('referrals')}}
      />
      <Stack.Screen
        name="MyTickets"
        component={MyTickets}
        options={{title: t('myTickets')}}
      />
      <Stack.Screen name="FAQs" component={FAQs} options={{title: t('faqs')}} />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{title: t('notifications')}}
      />

      <Stack.Screen
        name="SubscriptionPlans"
        component={SubscriptionPlans}
        options={{title: t('subscriptionPlans')}}
      />
    </Stack.Navigator>
  );
}

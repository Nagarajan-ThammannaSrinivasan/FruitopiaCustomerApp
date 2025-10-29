import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import BottomTabsNavigator from './BottomTabsNavigator';
import ReferralsScreen from '../screens/ReferralsScreen';
import SubscriptionsScreen from '../screens/drawerScreens/SubscriptionsScreen';
import OrderHistoryScreen from '../screens/drawerScreens/OrderHistoryScreen';
import TipDeliveryBoyScreen from '../screens/drawerScreens/TipDeliveryBoyScreen';
import ManageAddressesScreen from '../screens/drawerScreens/ManageAddressesScreen';
import DeliveryInstructionsScreen from '../screens/drawerScreens/DeliveryInstructionsScreen';
import WalletScreen from '../screens/drawerScreens/WalletScreen';
import FAQsScreen from '../screens/drawerScreens/FAQsScreen';
import MyTicketsScreen from '../screens/drawerScreens/MyTicketsScreen';
import NotificationsScreen from '../screens/drawerScreens/NotificationsScreen';
import SubscriptionPlans from '../screens/SubscriptionPlansScreen';
import ContactUsScreen from '../screens/drawerScreens/ContactUsScreen';
import AboutUsScreen from '../screens/drawerScreens/AboutUsScreen';
import TermsNPrivacyScreen from '../screens/drawerScreens/TermsNPrivacyScreen';
import LogoutScreen from '../screens/drawerScreens/LogoutScreen';

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
        name="SubscriptionsScreen"
        component={SubscriptionsScreen}
        options={{title: t('Subscriptions')}}
      />
      <Stack.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{title: t('orderHistory')}}
      />
      <Stack.Screen
        name="TipDeliveryBoyScreen"
        component={TipDeliveryBoyScreen}
        options={{title: t('tipDeliveryBoy')}}
      />
      <Stack.Screen
        name="ManageAddressesScreen"
        component={ManageAddressesScreen}
        options={{title: t('manageAddresses')}}
      />
      <Stack.Screen
        name="DeliveryInstructionsScreen"
        component={DeliveryInstructionsScreen}
        options={{title: t('deliveryInstructions')}}
      />
      <Stack.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{title: t('wallet')}}
      />

      <Stack.Screen
        name="ReferralsScreen"
        component={ReferralsScreen}
        options={{title: t('referrals')}}
      />
      <Stack.Screen
        name="MyTicketsScreen"
        component={MyTicketsScreen}
        options={{title: t('myTickets')}}
      />
      <Stack.Screen
        name="FAQsScreen"
        component={FAQsScreen}
        options={{title: t('faqs')}}
      />

      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{title: t('notifications')}}
      />

      <Stack.Screen
        name="SubscriptionPlansScreen"
        component={SubscriptionPlans}
        options={{title: t('subscriptionPlans')}}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{title: t('aboutUs')}}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{title: t('contactUs')}}
      />

      <Stack.Screen
        name="TermsNPrivacyScreen"
        component={TermsNPrivacyScreen}
        options={{title: t('termsNPrivacy')}}
      />

      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{title: t('logout')}}
      />
    </Stack.Navigator>
  );
}

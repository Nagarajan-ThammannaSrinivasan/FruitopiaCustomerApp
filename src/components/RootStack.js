import React, {Suspense, lazy} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {constant} from '../constants';
import CustomActivityIndicator from '../components/CustomActivityIndicator';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const bottomTabsLazy = lazy(() => import('./BottomTabsNavigator'));
  const subscriptionsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/SubscriptionsScreen'),
  );
  const orderHistoryScreenLazy = lazy(() =>
    import('../screens/drawerScreens/OrderHistoryScreen'),
  );
  const tipDeliveryBoyScreenLazy = lazy(() =>
    import('../screens/drawerScreens/TipDeliveryBoyScreen'),
  );
  const manageAddressesScreenLazy = lazy(() =>
    import('../screens/drawerScreens/ManageAddressesScreen'),
  );
  const deliveryInstructionsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/DeliveryInstructionsScreen'),
  );
  const walletScreenLazy = lazy(() =>
    import('../screens/drawerScreens/WalletScreen'),
  );
  const referralsScreenLazy = lazy(() => import('../screens/ReferralsScreen'));
  const myTicketsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/MyTicketsScreen'),
  );
  const faqsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/FAQsScreen'),
  );
  const notificationsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/NotificationsScreen'),
  );
  const subscriptionPlansLazy = lazy(() =>
    import('../screens/SubscriptionPlansScreen'),
  );
  const aboutUsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/AboutUsScreen'),
  );
  const contactUsScreenLazy = lazy(() =>
    import('../screens/drawerScreens/ContactUsScreen'),
  );
  const termsNPrivacyScreenLazy = lazy(() =>
    import('../screens/drawerScreens/TermsNPrivacyScreen'),
  );
  const logoutScreenLazy = lazy(() =>
    import('../screens/drawerScreens/LogoutScreen'),
  );

  return (
    <Suspense fallback={<CustomActivityIndicator />}>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: theme.contrastTextColor,
          detachPreviousScreen: false,
          backgroundColor: theme.backgroundColor,
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: theme.headerBackgroundColor,
            color: theme.headerTextColor,
          },
          headerTitleStyle: {fontFamily: constant.fonts.NunitoSansRegular},
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={bottomTabsLazy}
          options={{headerShown: false}} // keep custom header if needed
        />
        <Stack.Screen
          name="SubscriptionsScreen"
          component={subscriptionsScreenLazy}
          options={{title: t('Subscriptions')}}
        />
        <Stack.Screen
          name="OrderHistoryScreen"
          component={orderHistoryScreenLazy}
          options={{title: t('orderHistory')}}
        />
        <Stack.Screen
          name="TipDeliveryBoyScreen"
          component={tipDeliveryBoyScreenLazy}
          options={{title: t('tipDeliveryBoy')}}
        />
        <Stack.Screen
          name="ManageAddressesScreen"
          component={manageAddressesScreenLazy}
          options={{title: t('manageAddresses')}}
        />
        <Stack.Screen
          name="DeliveryInstructionsScreen"
          component={deliveryInstructionsScreenLazy}
          options={{title: t('deliveryInstructions')}}
        />
        <Stack.Screen
          name="WalletScreen"
          component={walletScreenLazy}
          options={{title: t('wallet')}}
        />

        <Stack.Screen
          name="ReferralsScreen"
          component={referralsScreenLazy}
          options={{title: t('referrals')}}
        />
        <Stack.Screen
          name="MyTicketsScreen"
          component={myTicketsScreenLazy}
          options={{title: t('myTickets')}}
        />
        <Stack.Screen
          name="FAQsScreen"
          component={faqsScreenLazy}
          options={{title: t('faqs')}}
        />

        <Stack.Screen
          name="NotificationsScreen"
          component={notificationsScreenLazy}
          options={{title: t('notifications')}}
        />

        <Stack.Screen
          name="SubscriptionPlansScreen"
          component={subscriptionPlansLazy}
          options={{title: t('subscriptionPlans')}}
        />
        <Stack.Screen
          name="AboutUsScreen"
          component={aboutUsScreenLazy}
          options={{title: t('aboutUs')}}
        />
        <Stack.Screen
          name="ContactUsScreen"
          component={contactUsScreenLazy}
          options={{title: t('contactUs')}}
        />

        <Stack.Screen
          name="TermsNPrivacyScreen"
          component={termsNPrivacyScreenLazy}
          options={{title: t('termsNPrivacy')}}
        />

        <Stack.Screen
          name="LogoutScreen"
          component={logoutScreenLazy}
          options={{title: t('logout')}}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

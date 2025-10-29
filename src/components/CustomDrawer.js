import React from 'react';
import {FlatList, Text, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import UserInfo from './UserInfo';
import Divider from './Divider';
import MaterialIcons from '@react-native-vector-icons/material-icons';

//Screens
import AboutUsScreen from '../screens/drawerScreens/AboutUsScreen';
import ContactUsScreen from '../screens/drawerScreens/ContactUsScreen';
import TermsNPrivacyScreen from '../screens/drawerScreens/TermsNPrivacyScreen';
import LogoutScreen from '../screens/drawerScreens/LogoutScreen';
import OrderHistoryScreen from '../screens/drawerScreens/OrderHistoryScreen';
import TipDeliveryBoyScreen from '../screens/drawerScreens/TipDeliveryBoyScreen';
import ManageAddressesScreen from '../screens/drawerScreens/ManageAddressesScreen';
import DeliveryInstructionsScreen from '../screens/drawerScreens/DeliveryInstructionsScreen';
import WalletScreen from '../screens/drawerScreens/WalletScreen';
import MyTicketsScreen from '../screens/drawerScreens/MyTicketsScreen';
import FAQsScreen from '../screens/drawerScreens/FAQsScreen';
import NotificationsScreen from '../screens/drawerScreens/NotificationsScreen';
import SubscriptionsScreen from '../screens/drawerScreens/SubscriptionsScreen';
import ReferralsScreen from '../screens/ReferralsScreen';

const drawerScreensArray = [
  {
    name: 'subscriptions',
    route: 'SubscriptionsScreen',
    component: SubscriptionsScreen,
  },
  {
    name: 'orderHistory',
    route: 'OrderHistoryScreen',
    component: OrderHistoryScreen,
  },
  {
    name: 'tipDeliveryBoy',
    route: 'TipDeliveryBoyScreen',
    component: TipDeliveryBoyScreen,
  },
  {
    name: 'manageAddresses',
    route: 'ManageAddressesScreen',
    component: ManageAddressesScreen,
  },
  {
    name: 'deliveryInstructions',
    route: 'DeliveryInstructionsScreen',
    component: DeliveryInstructionsScreen,
  },
  {name: 'wallet', route: 'WalletScreen', component: WalletScreen},
  {name: 'referrals', route: 'ReferralsScreen', component: ReferralsScreen},
  {name: 'myTickets', route: 'MyTicketsScreen', component: MyTicketsScreen},
  {name: 'faqs', route: 'FAQsScreen', component: FAQsScreen},
  {
    name: 'notifications',
    route: 'NotificationsScreen',
    component: NotificationsScreen,
  },
];

const drawerAppOfficalScreensArray = [
  {name: 'aboutUs', route: 'AboutUsScreen', component: AboutUsScreen},
  {name: 'contactUs', route: 'ContactUsScreen', component: ContactUsScreen},
  {
    name: 'termsNPrivacy',
    route: 'TermsNPrivacyScreen',
    component: TermsNPrivacyScreen,
  },
  {
    name: 'logout',
    route: 'LogoutScreen',
    component: LogoutScreen,
  },
];

export default function CustomDrawer() {
  const navigation = useNavigation();
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;
  return (
    <SafeAreaView edges={['top']}>
      <UserInfo />
      <FlatList
        data={drawerScreensArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Pressable
            style={{
              padding: 5,
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate(item.route)}>
            <Text
              style={{
                fontSize: 16,
                padding: 5,
                color: theme.primaryTextColor,
                flex: 1,
              }}>
              {t(item.name)}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{
                fontSize: 16,
                color: theme.primaryTextColor,
                alignItems: 'center',
                textAlign: 'center',
                fontStyle: 'bold',
                paddingRight: 5,
              }}></MaterialIcons>
          </Pressable>
        )}></FlatList>

      <Divider></Divider>
      <FlatList
        data={drawerAppOfficalScreensArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Pressable
            style={{padding: 5}}
            onPress={() => navigation.navigate(item.route)}>
            <Text
              style={{
                fontSize: 16,
                padding: 2,
                color: theme.primaryTextColor,
              }}>
              {t(item.name)}
            </Text>
          </Pressable>
        )}></FlatList>
    </SafeAreaView>
  );
}

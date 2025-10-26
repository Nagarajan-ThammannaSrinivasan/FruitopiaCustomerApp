import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Referrals from '../referrals';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Subscriptions from './subscriptions';
import {useTranslation} from 'react-i18next';
import OrderHistory from './orderHistory';
import TipDeliveryBoy from './tipDeliveryBoy';
import ManageAddresses from './manageAddresses';
import DeliveryInstructions from './deliveryInstructions';
import Wallet from './wallet';
import MyTickets from './myTickets';
import FAQs from './faqs';
import Notifications from './notifications';
import UserInfo from './userInfo';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
import TermsNPrivacy from './termsNPrivacy';
import Logout from './logout';
import Divider from '../divider';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const drawerScreensArray = [
  {name: 'subscriptions', route: 'Subscriptions', component: Subscriptions},
  {name: 'orderHistory', route: 'OrderHistory', component: OrderHistory},
  {name: 'tipDeliveryBoy', route: 'TipDeliveryBoy', component: TipDeliveryBoy},
  {
    name: 'manageAddresses',
    route: 'ManageAddresses',
    component: ManageAddresses,
  },
  {
    name: 'deliveryInstructions',
    route: 'DeliveryInstructions',
    component: DeliveryInstructions,
  },
  {name: 'wallet', route: 'Wallet', component: Wallet},
  {name: 'referrals', route: 'Referrals', component: Referrals},
  {name: 'myTickets', route: 'MyTickets', component: MyTickets},
  {name: 'faqs', route: 'FAQs', component: FAQs},
  {name: 'notifications', route: 'Notifications', component: Notifications},
];

const drawerAppOfficalScreensArray = [
  {name: 'aboutUs', route: 'AboutUs', component: AboutUs},
  {name: 'contactUs', route: 'ContactUs', component: ContactUs},
  {name: 'termsNPrivacy', route: 'termsNPrivacy', component: TermsNPrivacy},
  {
    name: 'logout',
    route: 'Logout',
    component: Logout,
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
          <TouchableOpacity
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
          </TouchableOpacity>
        )}></FlatList>

      <Divider></Divider>
      <FlatList
        data={drawerAppOfficalScreensArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
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
          </TouchableOpacity>
        )}></FlatList>
    </SafeAreaView>
  );
}

import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
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
import {DrawerContentScrollView} from '@react-navigation/drawer';

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

export default function CustomDrawer() {
  const navigation = useNavigation();
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;
  return (
    <SafeAreaView>
      <UserInfo />
      <FlatList
        data={drawerScreensArray}
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

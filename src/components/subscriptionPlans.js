import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';
import testSubscriptionPlansInfo from '../data/testSubscriptionPlans';
import {useTranslation} from 'react-i18next';

export default function SubscriptionPlans({route}) {
  const {
    subscriptionId,
    subscriptionName,
    subscriptionPic,
    weight,
    fruits,
    vegatables,
    protein,
  } = route.params.item;
  const [planSelectedId, setPlanSelectedId] = useState(null);
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [subscriptionPlansInfo, setSubscriptionPlansInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  useEffect(() => {
    let plansInfo = testSubscriptionPlansInfo.find(
      plan => plan.subscriptionId == subscriptionId,
    );
    setLoading(false);
    setSubscriptionPlansInfo(plansInfo);
  }, []);

  const subscriptionPlansRenderItem = ({item}) => (
    <Pressable
      style={[
        styles.planInfoItemContainer,
        {
          borderWidth: planSelectedId == item.id ? 2 : 2,
          borderColor:
            planSelectedId == item.id
              ? theme.cardPressedBackgroundColor
              : 'transparent',
        },
      ]}
      onPress={() => {
        console.log(item.id);
        setPlanSelectedId(item.id);
        console.log('Go to Add Ons');
      }}>
      <Text style={styles.planName}>{item.planName}</Text>
      <Text style={styles.planName}>₹ {item.price}</Text>
    </Pressable>
  );

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      borderRadius: 12, // rounded corners
      width: width,
      height: height,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
    },
    textContainer: {
      marginHorizontal: 5,
      padding: 5,
    },
    subscriptionInfoContainer: {
      margin: 10,
      padding: 10,
      backgroundColor: theme.cardContainerBackgroundColor,
      borderRadius: 12,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
    },
    subscriptionInfoItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    planInfoContainer: {
      backgroundColor: theme.backgroundColor,
      borderRadius: 12,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
    },
    planInfoItemContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginVertical: 5,
      padding: 10,
      backgroundColor: theme.cardContainerBackgroundColor,
      borderRadius: 12,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
      flexDirection: 'row',
    },
    image: {
      width: width,
      height: 200,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      resizeMode: 'cover',
    },
    nameText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'center',
      paddingTop: 5,
    },
    subscriptionInfoItemTextKey: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'right',
      paddingTop: 5,
      paddingRight: 20,
      flex: 1,
    },
    subscriptionInfoItemTextValue: {
      fontSize: 15,
      fontWeight: 'normal',
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'left',
      paddingTop: 5,
      flex: 1,
    },
    planName: {
      fontSize: 15,
      fontWeight: 'normal',
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'start',
      paddingTop: 5,
      flex: 1,
    },
  });

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={theme.primary} size="large" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Image source={subscriptionPic} style={styles.image}></Image>
      <View style={styles.subscriptionInfoContainer}>
        <Text style={styles.nameText}>{subscriptionName}</Text>
        <View style={styles.subscriptionInfoItemContainer}>
          <Text style={styles.subscriptionInfoItemTextKey}>{t('weight')}</Text>
          <Text style={styles.subscriptionInfoItemTextValue}>{weight}</Text>
        </View>

        <View style={styles.subscriptionInfoItemContainer}>
          <Text style={styles.subscriptionInfoItemTextKey}>{t('fruits')}</Text>
          <Text style={styles.subscriptionInfoItemTextValue}>{fruits}</Text>
        </View>
        <View style={styles.subscriptionInfoItemContainer}>
          <Text style={styles.subscriptionInfoItemTextKey}>
            {t('vegatables')}
          </Text>
          <Text style={styles.subscriptionInfoItemTextValue}>{vegatables}</Text>
        </View>
        <View style={styles.subscriptionInfoItemContainer}>
          <Text style={styles.subscriptionInfoItemTextKey}>{t('protein')}</Text>
          <Text style={styles.subscriptionInfoItemTextValue}>{protein}</Text>
        </View>
      </View>

      <FlatList
        style={styles.planInfoContainer}
        data={subscriptionPlansInfo.plans}
        keyExtractor={item => item.id.toString()}
        renderItem={subscriptionPlansRenderItem}></FlatList>
    </View>
  );
}

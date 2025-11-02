import React, {useRef, useMemo, useEffect, useState, useCallback} from 'react';
import {Text, Image, View, StyleSheet, FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useWindowDimensions} from 'react-native';
import testSubscriptionPlansInfo from '../data/testSubscriptionPlans';
import {useTranslation} from 'react-i18next';
import BottomSheetHandleBar from '../components/BottomSheetHandleBar';
import AddOns from '../components/AddOns';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import {constant} from '../constants';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

export default function SubscriptionPlansScreen({route}) {
  const {
    subscriptionId,
    subscriptionName,
    subscriptionPic,
    weight,
    fruits,
    vegatables,
    protein,
  } = route.params.item;
  const bottomSheetRef = useRef(null);
  const [planSelectedId, setPlanSelectedId] = useState(null);
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [subscriptionPlansInfo, setSubscriptionPlansInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const snapPoints = useMemo(() => ['10%', '25%', '59%', '75%'], []);
  const openSheet = () => bottomSheetRef.current?.snapToIndex(2);
  const closeSheet = () => bottomSheetRef.current?.close();

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
        setPlanSelectedId(item.id);
        openSheet();
      }}>
      <Text style={styles.planName}>{item.planName}</Text>
      <Text style={styles.planName}>₹ {item.price}</Text>
    </Pressable>
  );

  const onBottomSheetClose = () => {
    closeSheet();
    setPlanSelectedId(null);
  };

  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
      marginRight: insets.right > 20 ? 0 : -insets.right,
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
      height: '40%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      resizeMode: 'cover',
    },
    nameText: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansBold,
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'center',
      paddingTop: 5,
    },
    subscriptionInfoItemTextKey: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansBold,
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'right',
      paddingTop: 5,
      paddingRight: 20,
      flex: 1,
    },
    subscriptionInfoItemTextValue: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'left',
      paddingTop: 5,
      flex: 1,
    },
    planName: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'start',
      paddingTop: 5,
      flex: 1,
    },
    flex1: {flex: 1},
  });

  if (loading) return <CustomActivityIndicator />;

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.container}>
        <Image source={subscriptionPic} style={styles.image}></Image>
        <View style={styles.subscriptionInfoContainer}>
          <Text style={styles.nameText}>{subscriptionName}</Text>
          <View style={styles.subscriptionInfoItemContainer}>
            <Text style={styles.subscriptionInfoItemTextKey}>
              {t('weight')}
            </Text>
            <Text style={styles.subscriptionInfoItemTextValue}>{weight}</Text>
          </View>

          <View style={styles.subscriptionInfoItemContainer}>
            <Text style={styles.subscriptionInfoItemTextKey}>
              {t('fruits')}
            </Text>
            <Text style={styles.subscriptionInfoItemTextValue}>{fruits}</Text>
          </View>
          <View style={styles.subscriptionInfoItemContainer}>
            <Text style={styles.subscriptionInfoItemTextKey}>
              {t('vegatables')}
            </Text>
            <Text style={styles.subscriptionInfoItemTextValue}>
              {vegatables}
            </Text>
          </View>
          <View style={styles.subscriptionInfoItemContainer}>
            <Text style={styles.subscriptionInfoItemTextKey}>
              {t('protein')}
            </Text>
            <Text style={styles.subscriptionInfoItemTextValue}>{protein}</Text>
          </View>
        </View>
        <FlatList
          style={styles.planInfoContainer}
          data={subscriptionPlansInfo.plans}
          keyExtractor={item => item.id.toString()}
          renderItem={subscriptionPlansRenderItem}></FlatList>

        <BottomSheet
          ref={bottomSheetRef}
          handleComponent={() => (
            <BottomSheetHandleBar onClose={onBottomSheetClose} />
          )}
          backgroundStyle={{backgroundColor: theme.bottomSheetBackgroundColor}}
          index={-1}
          snapPoints={snapPoints}>
          <AddOns />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
}

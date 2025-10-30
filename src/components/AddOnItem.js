import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function AddOnItem({item}) {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const {t, i18n, ready} = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      margin: 5,
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
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={{color: theme.textColor}}>{item.name}</Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-end',
          }}>
          {item.price !== null ? (
            <Text style={{color: theme.textColor}}>₹ {item.price}</Text>
          ) : (
            ''
          )}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <Pressable>
            <MaterialIcons
              name={isChecked ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color={isChecked ? theme.primary : theme.inactiveCheckBoxColor}
              onPress={() => setIsChecked(!isChecked)}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

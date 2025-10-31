import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {constant} from '../constants';

export default function AddOnItem({item}) {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const [isChecked, setIsChecked] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleAddonCheck = addon => {
    setIsChecked(prev => {
      const latestCheckValue = !prev;
      if (item.variants.length > 0 && latestCheckValue) {
        setSelectedVariant(item.variants[0]);
      } else if (item.variants.length > 0 && !latestCheckValue) {
        setSelectedVariant(null);
      }
      return latestCheckValue;
    });
  };

  const handleVariantSelection = variant => {
    setSelectedVariant(variant);
    setIsChecked(true);
  };

  const styles = StyleSheet.create({
    container: {
      marginHorizantal: 10,
      marginBottom: 10,
      padding: 10,
      borderBottomWidth: 0.5,
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
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start', // keep everything top-aligned
    },
    nameText: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
    },
    priceText: {
      fontSize: 14,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
    },
    descriptionText: {
      fontSize: 14,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
    },
    variantText: {
      fontSize: 14,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
      paddingLeft: 10,
      paddingRight: 5,
      paddingVertical: 5,
    },
    selectedVariant: {
      borderWidth: 2,
      borderColor: 'red',
    },
    variantNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {marginLeft: 10},
    flex1: {flex: 1},
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Left Section — Name + Variants */}
        <View style={styles.flex1}>
          <Text style={styles.nameText}>{item.name}</Text>
          {item.quantity != null ? (
            <Text style={styles.descriptionText}>({item.quantity})</Text>
          ) : (
            <Text>{''}</Text>
          )}
          {item.variants.length > 0
            ? item.variants.map((variant, index) => (
                <Pressable
                  key={variant.variant_name + index}
                  onPress={() => handleVariantSelection(variant)}>
                  <View style={styles.variantNameContainer}>
                    <Text style={styles.variantText}>
                      {variant.variant_name} ({variant.variant_provide})
                    </Text>
                    {selectedVariant == variant ? (
                      <MaterialIcons
                        name="check-circle"
                        size={20}
                        color="green"
                      />
                    ) : (
                      <Text>{''}</Text>
                    )}
                  </View>
                </Pressable>
              ))
            : null}
        </View>

        {/* Middle Section — Price */}
        <View>
          {item.price !== null ? (
            <Text key="price" style={styles.priceText}>
              ₹ {item.price}
            </Text>
          ) : (
            <Text key="price_empty">{''} </Text>
          )}

          {item.variants.length > 0
            ? [{variant_price: 'parent'}, ...item.variants].map(
                (variant, index) =>
                  variant.variant_price !== 'parent' ? (
                    <Text key={index} style={styles.variantText}>
                      ₹ {variant.variant_price}
                    </Text>
                  ) : (
                    <Text key={`price_empty2${index}`}>{''} </Text>
                  ),
              )
            : null}
        </View>

        {/* Right Section — Checkbox */}
        <Pressable style={styles.checkBox} onPress={handleAddonCheck}>
          <MaterialIcons
            name={isChecked ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={isChecked ? theme.primary : theme.inactiveCheckBoxColor}
          />
        </Pressable>
      </View>
    </View>
  );
}

import React from 'react';
import {View} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function StarRating({rating, maxRating = 5}) {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <MaterialIcons
        key={i}
        name={i <= rating ? 'star' : 'star-border'}
        size={20}
        color="#FFD700"
      />,
    );
  }

  return <View style={{flexDirection: 'row', marginTop: 5}}>{stars}</View>;
}

import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {fetchPepople} from '../../actions/people.action';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import R from '../../resources/R';

export const PeopleCardScreen = () => {
  return (
    <View>
      <Text>Вы перешли в карточку персонажа</Text>
    </View>
  );
};

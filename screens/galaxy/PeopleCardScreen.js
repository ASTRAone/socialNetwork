import React, {useEffect, useState} from 'react';
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

import { unwrapResult } from '@reduxjs/toolkit';
import {fetchCardPeople} from '../../actions/people.action';
import {useDispatch} from 'react-redux';

import R from '../../resources/R';

export const PeopleCardScreen = ({route, navigation}) => {
  const {name} = route.params;
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  console.log(
    'Data: ', data,
    'Name: ', name 
  )

  useEffect(() => {
    dispatch(fetchCardPeople(name))
      .then(unwrapResult)
      .then((person) => {
        console.log('Person ', person);
        setData(person);
      })
  }, []);

  return (
    <ScrollView>
      <Text>{`Вы перешли в карточку персонажа, ${name}`}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

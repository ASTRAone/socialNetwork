import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import {unwrapResult} from '@reduxjs/toolkit';
import {fetchCardVariety} from '../../actions/variety.actions';
import {useDispatch} from 'react-redux';
import { useTheme } from '@react-navigation/native';

import {renderImages} from '../../utility/renderSrcImages';
import {Loading} from '../../components/Loading';
import {transformationDataPeople} from '../../utility/transformationDataPeople';
import { white } from '../../utility/darkTheme';

import R from '../../resources/R';

export const VarietyCardScreen = ({route, navigation}) => {
  const {name} = route.params;
  const dispatch = useDispatch();
  const [person, setPerson] = useState('');
  const [loading, setLoading] = useState(true);
  const {dark: isDark} = useTheme();

  useEffect(() => {
    dispatch(fetchCardVariety(name))
      .then(unwrapResult)
      .then(person => {
        setPerson(person?.data[0]);
        console.loh(person)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? R.colors.gray40 : white.background,
        position: 'relative',
      }}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={{flex: 1}}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={renderImages(name)} />
          </View>
          <View style={styles.containerContent}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Цвет глаз:'}</Text>
              <Text style={styles.textItem}>{transformationDataPeople(person?.eye_colors)}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Цвет волос:'}</Text>
              <Text style={styles.textItem}>{transformationDataPeople(person?.hair_colors)}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Средний рост:'}</Text>
              <Text style={styles.textItem}>{person?.average_height}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Средняя продолжительность жизни:'}</Text>
              <Text style={styles.textItem}>{isNaN(person?.average_lifespan) ? 'н/а' : person?.average_lifespan}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Классификация:'}</Text>
              <Text style={styles.textItem}>{transformationDataPeople(person?.classification)}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Обозначение:'}</Text>
              <Text style={styles.textItem}>{transformationDataPeople(person?.designation)}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: '100%',
  },
  containerContent: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    color: R.colors.white,
    textTransform: 'uppercase',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  containerItem: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    width: 300,
  },
  titleItem: {
    color: R.colors.white,
    marginRight: 10,
    fontSize: 16,
  },
  textItem: {
    color: R.colors.gray30,
  },
});

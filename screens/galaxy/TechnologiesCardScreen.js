import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import {unwrapResult} from '@reduxjs/toolkit';
import { fetchCardTechnologies } from '../../actions/technologies.action';
import {useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import {renderImages} from '../../utility/renderSrcImages';
import {Loading} from '../../components/Loading';
import {white} from '../../utility/darkTheme';

import R from '../../resources/R';

export const TechnologiesCardScreen = ({route, navigation}) => {
  const {model} = route.params;
  const dispatch = useDispatch();
  const [models, setModels] = useState('');
  const [loading, setLoading] = useState(true);
  const {dark: isDark} = useTheme();

  useEffect(() => {
    dispatch(fetchCardTechnologies(model))
      .then(unwrapResult)
      .then(models => {
        setModels(models?.data[0]);
        console.loh(models)
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
            <Image style={styles.image} source={renderImages(model)} />
          </View>
          <View style={styles.containerContent}>
            <Text style={styles.title}>{model}</Text>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Название:'}</Text>
              <Text style={styles.textItem}>{models?.name}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Вместимость пассажиров:'}</Text>
              <Text style={styles.textItem}>{models?.passengers}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Максимальная скорость:'}</Text>
              <Text style={styles.textItem}>{models?.max_atmosphering_speed}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Производитель:'}</Text>
              <Text style={styles.textItem}>{models?.manufacturer}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Длина:'}</Text>
              <Text style={styles.textItem}>{models?.length}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Рейтинг гипердвигателя:'}</Text>
              <Text style={styles.textItem}>{models?.hyperdrive_rating}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Экипаж:'}</Text>
              <Text style={styles.textItem}>{models?.crew}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Строительство корабля:'}</Text>
              <Text style={styles.textItem}>{models?.consumables}</Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.titleItem}>{'Грузоподъемность:'}</Text>
              <Text style={styles.textItem}>{models?.cargo_capacity}</Text>
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
  },
  titleItem: {
    color: R.colors.white,
    marginRight: 10,
    fontSize: 16,
  },
  textItem: {
    color: R.colors.gray30,
    flexWrap: 'wrap',
    width: 200
  },
});

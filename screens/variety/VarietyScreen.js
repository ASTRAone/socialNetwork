import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import {fetchVariety} from '../../actions/variety.actions';
import {useDispatch, useSelector} from 'react-redux';
import { useTheme } from '@react-navigation/native';

import R from '../../resources/R';
import {unwrapResult} from '@reduxjs/toolkit';
import {useNavigation} from '@react-navigation/native';

import {UnexpectedError} from '../../components/UnexpectedError';
import {renderImages} from '../../utility/renderSrcImages';
import {transformationDataPeople} from '../../utility/transformationDataPeople';
import { white } from '../../utility/darkTheme';

const VarietyScreenItem = ({
  eye_colors,
  hair_colors,
  name,
}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.itemContent} 
      onPress={() => navigation.navigate('VarietyCardScreen', {name})} >
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={renderImages(name)}
      />
      <View style={styles.itemContentText}>
        <Text style={[styles.itemText, {color: R.colors.white, textTransform: 'uppercase'}]}>{name}</Text>
        <Text style={styles.itemText}>{`Цвет глаз: ${transformationDataPeople(eye_colors)}`}</Text>
        <Text style={styles.itemText}>{`Цвет волос: ${transformationDataPeople(hair_colors)}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const VarietyScreen = ({navigation}) => {
  const variety = useSelector(state => state.variety);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {dark: isDark} = useTheme();

  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchVariety())
      .then(unwrapResult)
      .catch(() => setError(true))
      .finally(() => (setRefreshing(false), setError(false)));
  }, []);

  useEffect(() => {
    if (!variety.data.length) {
      onRefresh();
    }
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: isDark ? R.colors.gray40 : white.background}]}>
      {error ? (
        <UnexpectedError onRefresh={onRefresh} />
      ) : (
        <FlatList
          style={{
            marginTop: 10,
          }}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
          }
          data={variety.data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VarietyScreenItem key={index} {...item} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272b30',
    paddingHorizontal: 20,
  },
  itemContent: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemContentText: {
    marginLeft: 10,
    flex: 1,
  },
  itemText: {
    color: R.colors.gray30,
    flexShrink: 1,
    fontSize: 16,
  },
});

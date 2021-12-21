import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import {fetchPeople} from '../../actions/people.action';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';

import R from '../../resources/R';
import {unwrapResult} from '@reduxjs/toolkit';

import {UnexpectedError} from '../../components/UnexpectedError';
import {renderImages} from '../../utility/renderSrcImages';
import {white} from '../../utility/darkTheme';

const PeopleScreenItem = ({name, height, birth_year}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemContent}
      onPress={() => navigation.navigate('PeopleCardScreen', {name})}>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={renderImages(name)}
      />
      <View style={styles.itemContentText}>
        <Text
          numberOfLines={1}
          style={[styles.itemText, {color: R.colors.white}]}>
          {'Имя '}
          <Text
            style={{
              textTransform: 'uppercase',
            }}>
            {name}
          </Text>
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.itemText, {color: R.colors.gray30}]}>
          {`Рост: ${height}`}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.itemText, {color: R.colors.gray30}]}>
          {`День рождения: ${birth_year}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const PeopleScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const people = useSelector(state => state.people);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {dark: isDark} = useTheme();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchPeople())
      .then(unwrapResult)
      .catch(() => setError(true))
      .finally(() => (setRefreshing(false), setError(false)));
  }, []);

  useEffect(() => {
    if (!people.data.length) {
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
          data={people.data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <PeopleScreenItem key={index} {...item} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.gray40,
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
    flexDirection: 'row',
    flexShrink: 1,
    fontSize: 16,
  },
});

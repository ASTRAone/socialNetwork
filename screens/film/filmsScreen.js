import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';

import {fetchFilms} from '../../actions/films.action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {unwrapResult} from '@reduxjs/toolkit';
import {UnexpectedError} from '../../components/UnexpectedError';
import {renderImages} from '../../utility/renderSrcImages';
import R from '../../resources/R';
import {white} from '../../utility/darkTheme';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FilmScreenItem = ({
  title,
  producer,
  director,
  release_date,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.containerItem}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setOpen(oldOpened => !oldOpened);
        }}>
        <Image
          style={{
            maxWidth: 300,
            height: 350,
          }}
          source={renderImages(title)}
        />
        <Text style={styles.titleItem}>{title}</Text>
      </TouchableOpacity>
      {open ? (
        <View style={{marginTop: 10}}>
          <Text style={styles.titleItemDescription}>
            {'Продюссер: '}
            <Text style={styles.textItemDescription}>{producer}</Text>
          </Text>
          <Text style={styles.titleItemDescription}>
            {'Директор: '}
            <Text style={styles.textItemDescription}>{director}</Text>
          </Text>
          <Text style={styles.titleItemDescription}>
            {'Дата релиза: '}
            <Text style={styles.textItemDescription}>{release_date}</Text>
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export const FilmsScreen = ({navigation}) => {
  const films = useSelector(state => state.films);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {dark: isDark} = useTheme();

  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchFilms())
      .then(unwrapResult)
      .catch(() => setError(true))
      .finally(() => (setRefreshing(false), setError(false)));
  }, []);

  useEffect(() => {
    if (!films.data.length) {
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
            // marginBottom: 10,
          }}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
          }
          data={films.data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <FilmScreenItem key={index} {...item} />
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
  containerItem: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 300,
  },
  titleItem: {
    textTransform: 'uppercase',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    color: R.colors.white,
  },
  titleItemDescription: {
    color: R.colors.white,
    fontSize: 16,
    marginBottom: 5,
  },
  textItemDescription: {
    color: R.colors.gray30,
  },
});

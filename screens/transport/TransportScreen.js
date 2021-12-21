import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';

import {fetchTransport} from '../../actions/transport.actions';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import R from '../../resources/R';
import {unwrapResult} from '@reduxjs/toolkit';

import {UnexpectedError} from '../../components/UnexpectedError';
import {renderImages} from '../../utility/renderSrcImages';
import {white} from '../../utility/darkTheme';

const TransportScreenItem = ({
  name,
  length,
  crew,
  model,
  max_atmosphering_speed,
}) => {

  return (
    <View style={styles.itemContent}>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={renderImages(name)}
      />
      <View style={styles.itemContentText}>
        <Text
          style={[styles.itemText, {color: R.colors.white}]}>
          {'Модель '}
          <Text style={{textTransform: 'uppercase'}}>{model}</Text>
        </Text>
        <Text style={styles.itemText}>{`Длина ${length}`}</Text>
        <Text style={styles.itemText}>{`Экипаж ${crew}`}</Text>
        <Text style={styles.itemText}>{`Макс. скорость ${max_atmosphering_speed}`}</Text>
      </View>
    </View>
  );
};

export const TransportScreen = ({navigation}) => {
  const transport = useSelector(state => state.transport);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {dark: isDark} = useTheme();

  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchTransport())
      .then(unwrapResult)
      .catch(() => setError(true))
      .finally(() => (setRefreshing(false), setError(false)));
  }, []);

  useEffect(() => {
    if (!transport.data.length) {
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
          data={transport.data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TransportScreenItem key={index} {...item} />
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

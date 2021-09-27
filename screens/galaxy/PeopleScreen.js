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

const PeopleScreenItem = ({name, height, birth_year}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.itemContent}
      onPress={() => navigation.navigate('PeopleCardScreen')}>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={require('../../images/Luke.jpg')}
      />
      <View style={styles.itemContentText}>
        <Text
          numberOfLines={1}
          style={[styles.itemText, {color: R.colors.white, paddingRight: 10}]}>
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
  const people = useSelector(state => state.people);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPepople());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        style={{
          marginTop: 10,
        }}
        data={people.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <PeopleScreenItem key={index} {...item} />
        )}
      />
    </ScrollView>
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
    flexDirection: 'row',
    flexShrink: 1,
    fontSize: 16,
  },
});

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList, Image, ScrollView} from 'react-native';

import {fetchPepople} from '../../actions/people.action';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Planer} from '../../icons/planet';

const PeopleScreenItem = ({name, skin_color}) => {
  return (
    <TouchableOpacity>
      {/* <Image
        style={{
          width: 200,
          height: 200
        }}
        source={require('../../')}
      /> */}
      <Planer />
      <View>
        <Text>{name}</Text>
        <Text>{skin_color}</Text>
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
        data={people.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <PeopleScreenItem {...item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272b30',
  },
});

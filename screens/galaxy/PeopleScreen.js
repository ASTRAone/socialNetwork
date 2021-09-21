import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {fetchPepople} from '../../actions/people.action';
import {useDispatch} from 'react-redux';

export const PeopleScreen = ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPepople())
  }, [])

  return (
    <View style={styles.container}>
      <Text>Персонажи</Text>
      {/* <Button
                title="Комментарий"
                onPress={() => {
                    navigation.goBack()
                }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272b30',
  },
});

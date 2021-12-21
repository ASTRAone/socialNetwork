import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const DefaultButtom = ({text, onPress = null, btnStyle}) => {
  return (
    <TouchableOpacity  
      activeOpacity={0.7}
      onPress={() => onPress()}
      style={[styles.btn, btnStyle]} >
        <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

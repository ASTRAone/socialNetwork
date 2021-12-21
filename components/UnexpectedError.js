import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {DefaultButtom} from './Button';
import R from '../resources/R';

export const UnexpectedError = ({onRefresh, title, text, buttonText}) => {
  return (
    <View style={styles.containerError}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageError}
          source={require('../images/SpaceShip.png')}
        />
      </View>
      <Text style={styles.titleError}>
        {title ? title : R.string.unexpectedErrorComponent.unexpectedError}
      </Text>
      <Text style={styles.textError}>
        {text ? text : R.string.unexpectedErrorComponent.unexpectedErrorText}
      </Text>
      <DefaultButtom
        onPress={() => onRefresh()}
        text={
          buttonText ? buttonText : R.string.unexpectedErrorComponent.refresh
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  titleError: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.408,
    marginBottom: 10,
  },
  textError: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.154,
    marginBottom: 15,
    color: R.colors.gray10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageError: {
    width: 200,
    height: 220,
  },
});

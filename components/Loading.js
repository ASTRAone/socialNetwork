import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import R from '../resources/R';

export const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={R.colors.green} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

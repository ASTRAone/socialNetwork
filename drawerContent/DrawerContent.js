import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {StormTrooper} from '../icons/stormTrooper';

export const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.constainer}>
      <DrawerContentScrollView>
        <View style={styles.constainerImage}>
          <Image
            style={styles.image}
            source={require('../images/logo.png')}
          />
        </View>
        <View style={styles.containerLinks}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeopleStack')}
            style={styles.link}>
            <Text style={styles.linkText}>Персонажи</Text>
          <View style={styles.linkImage}>
            <StormTrooper />
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TechnologiesStack')}
            style={styles.link}>
            <Text style={styles.linkText}>Технологии</Text>
            {/* TODO: доделать SVG иконку для технологий */}
            <Image
              style={styles.linkImage}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/1328/PNG/128/r2d2_87090.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#32383e',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  constainerImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    width: 250,
    height: 73,
  },
  containerLinks: {
    marginTop: 0,
    paddingTop: 0,
  },
  link: {
    marginBottom: 20,
    flexDirection: 'row',
    borderColor: '#ffff',
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#ffff',
    textTransform: 'uppercase',
  },
  linkImage: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
});

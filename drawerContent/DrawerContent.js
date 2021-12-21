import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Switch} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {StormTrooper} from '../icons/stormTrooper';
import R from '../resources/R';
import { dark } from '../utility/darkTheme';
import { white } from '../utility/darkTheme';

import { EventRegister } from 'react-native-event-listeners';
import { useTheme } from '@react-navigation/native';

export const DrawerContent = ({navigation}) => {
  const [darkMode, setDarkMode] = useState(false);
  const {dark: isDark} = useTheme();

  return (
    <View style={[styles.constainer, {backgroundColor: isDark ? R.colors.dark20 : white.background}]}>
      <DrawerContentScrollView>
        <View style={styles.constainerImage}>
          <Image
            style={styles.image}
            source={require('../images/logo.png')}
          />
        </View>
        <View style={styles.containerLinks}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeopleScreen')}
            style={styles.link}>
            <Text style={[styles.linkText, {color: isDark ? dark.text : white.text}]}>Персонажи</Text>
          <View style={styles.linkImage}>
            <StormTrooper />
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TechnologiesScreen')}
            style={styles.link}>
            <Text style={[styles.linkText, {color: isDark ? dark.text : white.text}]}>Технологии</Text>
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
      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, {color: isDark ? dark.text : white.text}]}>Темная тема</Text>
        <Switch
          value={darkMode}
          onValueChange={val => {
            setDarkMode(val);
            EventRegister.emit('changeEventTheme', val);
          }} />
      </View>
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
    borderColor: R.colors.white,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
  },
  linkText: {
    color: R.colors.white,
    textTransform: 'uppercase',
  },
  linkImage: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  darkModeText: {
    color: R.colors.white,
    fontSize: 16,
  }
});

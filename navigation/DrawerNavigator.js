import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {TouchableOpacity, StyleSheet} from 'react-native';

import {DrawerContent} from '../drawerContent/DrawerContent';

import {TechnologiesScreen} from '../screens/galaxy/TechnologiesScreen';
import {TechnologiesCardScreen} from '../screens/galaxy/TechnologiesCardScreen';
import {PeopleScreen} from '../screens/galaxy/PeopleScreen';
import {PeopleCardScreen} from '../screens/galaxy/PeopleCardScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';

import R from '../resources/R';
import {white} from '../utility/darkTheme';

const Drawer = createDrawerNavigator();

export const DarwerStack = () => {
  const navigation = useNavigation();
  const {dark: isDark} = useTheme();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          title: 'Джедаи и Ситхи',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
          headerTintColor: R.colors.gray10,
        }}
      />
      <Drawer.Screen
        name="PeopleCardScreen"
        component={PeopleCardScreen}
        options={{
          title: 'Карточка героя',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PeopleScreen')}>
              <Icon name='arrow-left' size={20} style={styles.menuIcons} />
            </TouchableOpacity>
          )
        }}
      />
      <Drawer.Screen
        name="TechnologiesScreen"
        component={TechnologiesScreen}
        options={{
          title: 'Технологии',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
          headerTintColor: R.colors.gray10,
        }}
      />
      <Drawer.Screen
        name="TechnologiesCardScreen"
        component={TechnologiesCardScreen}
        options={{
          title: 'Карточка технологии',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('TechnologiesScreen')}>
              <Icon name='arrow-left' size={20} style={styles.menuIcons} />
            </TouchableOpacity>
          )
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  menuIcons: {
    marginLeft: 20,
    color: R.colors.gray10,
  },
});

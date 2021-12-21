import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarwerStack} from './DrawerNavigator';
import {VarietyStack} from './varietyStack/VarietyNavigator';
import { useTheme } from '@react-navigation/native';

import {FilmsScreen} from '../screens/film/filmsScreen';
import {TransportScreen} from '../screens/transport/TransportScreen';

import {Variety} from '../icons/variety';
import {Movie} from '../icons/movie';
import {Planer} from '../icons/planet';
import {SpaceShip} from '../icons/spaceShip';

import R from '../resources/R';
import { white } from '../utility/darkTheme';
import { dark } from '../utility/darkTheme';

const Tab = createBottomTabNavigator();

// TODO: доделать darkTheme у label(чтобы была анимация при нажатии)

export const TabStack = () => {
  const {dark: isDark} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
          borderTopColor: 'rgba(0, 0, 0, 0.6)',
          borderTopWidth: isDark ? 1 : 0,
        },
      }}>
      <Tab.Screen
        name="GalaxyScreen"
        component={DarwerStack}
        options={{
          tabBarLabel: 'Вселенная',
          tabBarLabelStyle: {
            color: white.text
          },

          headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Planer />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FilmsScreen"
        component={FilmsScreen}
        options={{
          title: 'Фильмы',
          headerTitleAlign: 'center',
          tabBarLabel: 'Фильмы',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
          tabBarIcon: () => (
            <View>
              <Movie />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TransportScreen"
        component={TransportScreen}
        options={{
          title: 'Транспорт',
          headerTitleAlign: 'center',
          tabBarLabel: 'Транспорт',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
          tabBarIcon: () => (
            <View>
              <SpaceShip />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="VarietyScreen"
        component={VarietyStack}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: 'Разновидность',
          tabBarIcon: () => (
            <View>
              <Variety />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

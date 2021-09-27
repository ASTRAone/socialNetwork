import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NotificationsStack} from './NotificationNavigator';
import {DarwerStack} from './DrawerNavigator';
import {FilmStack} from './filmStack/FilmNavigator'

import {MessagesScreen} from '../screens/MessagesScreen';

import {Variety} from '../icons/variety';
import {Movie} from '../icons/movie';
import {Planer} from '../icons/planet';
import {SpaceShip} from '../icons/spaceShip';

import R from '../resources/R';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          backgroundColor: R.colors.dark10,
          borderTopColor: 'rgba(0, 0, 0, 0.6)',
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="GalaxyScreen"
        component={DarwerStack}
        options={{
          tabBarLabel: 'Вселенная',
          tabBarLabelStyle: {},
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
        component={FilmStack}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Фильмы',
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Movie />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TransportScreen"
        component={MessagesScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Транспорт',
          tabBarIcon: () => (
            <View>
              <SpaceShip />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="VarietyScreen"
        component={NotificationsStack}
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

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NotificationsStack} from './NotificationNavigator';
import {DarwerStack} from './DrawerNavigator';
import {FilmStack} from './filmStack/FilmNavigator'

import {MessagesScreen} from '../screens/MessagesScreen';

import {StyleSheet, Image} from 'react-native';
import {Image} from 'react-native-svg'

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
            <Image
              style={styles.icon}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/335/PNG/128/Death_Star_2nd_35408.png',
              }}
            />
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
            <Image
              style={styles.icon}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/198/PNG/128/Folder_iMovies_2_24096.png',
              }}
            />
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
            <Image
              style={styles.icon}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/335/PNG/128/Landspeeder_35433.png',
              }}
            />
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
            <Image
              style={styles.icon}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/1070/PNG/128/jawa_icon-icons.com_76960.png',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});

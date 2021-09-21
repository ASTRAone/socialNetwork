import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { FilmsScreen } from '../../screens/film/filmsScreen';
import { FimCardScreen } from '../../screens/film/filmCardScreen';

import R from '../../resources/R';

const Stack = createStackNavigator();

export const FilmStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FilmsScreen"
        component={FilmsScreen}
        options={{
          title: 'Фильмы',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: R.colors.dark10,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
        }}
      />
      <Stack.Screen
        screenOptions={{headerShown: false}}
        name="FimCardScreen"
        component={FimCardScreen}
        options={{
          title: 'О фильме',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: R.colors.dark10,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
        }}
      />
    </Stack.Navigator>
  );
};

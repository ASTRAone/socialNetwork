import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {PeopleScreen} from '../../screens/galaxy/PeopleScreen';
import {PeopleCardScreen} from '../../screens/galaxy/PeopleCardScreen';

const Stack = createStackNavigator();

export const GalaxyPeopleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          title: 'Сообщения',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        screenOptions={{headerShown: false}}
        name="PeopleCardScreen"
        component={PeopleCardScreen}
        options={{
          title: 'Карточка персонажа',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

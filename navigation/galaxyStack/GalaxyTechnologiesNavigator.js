import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TechnologiesScreen} from '../../screens/galaxy/TechnologiesScreen';
import {TechnologiesCardScreen} from '../../screens/galaxy/TechnologiesCardScreen';

const Stack = createStackNavigator();

export const GalaxyTechnologiesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TechnologiesScreen"
        component={TechnologiesScreen}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TechnologiesCardScreen"
        component={TechnologiesCardScreen}
        options={{
          title: 'Карточка технологии',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

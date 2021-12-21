import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import { VarietyScreen } from '../../screens/variety/VarietyScreen';
import { VarietyCardScreen } from '../../screens/variety/VarietyCardScreen';
import R from '../../resources/R';
import { white } from '../../utility/darkTheme';

const Stack = createStackNavigator();

export const VarietyStack = () => {
  const {dark: isDark} = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VarietyScreen"
        component={VarietyScreen}
        options={{
          title: 'Разновидности',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
        }}
      />
      <Stack.Screen
        name="VarietyCardScreen"
        component={VarietyCardScreen}
        options={{
          title: 'Карточка разновидностей',
          headerTitleAlign: 'center',
          headerTintColor: R.colors.gray10,
          headerStyle: {
            backgroundColor: isDark ? R.colors.dark10 : white.backgroundTab,
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderBottomWidth: isDark ? 1 : 0,
          },
          headerTitleStyle: {
            color: R.colors.gray10,
          },
        }}
      />
    </Stack.Navigator>
  );
};

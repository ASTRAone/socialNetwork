import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {CommentsScreen} from '../screens/CommentsScreen';
import {NotificationsScreen} from '../screens/NotificationsScreen';

const Stack = createStackNavigator();

export const NotificationsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Comments" >
        <Stack.Screen
            name="Comments" 
            component={CommentsScreen}
            options={{
              title: 'Сообщения',
              headerTitleStyle: {
                  width: '100%',
                  alignContent: 'center',
              },
          }}
/>
        <Stack.Screen 
            screenOptions={{ headerShown: false }}
            name="Notifications" 
            component={NotificationsScreen}
            options={
                {title: 'Уведомления'}
            } />
    </Stack.Navigator>
  );
};

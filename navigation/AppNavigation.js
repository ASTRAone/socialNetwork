import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NotificationsStack} from './NotificationNavigator';

import {FeedScreen} from '../screens/FeedScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {MessagesScreen} from '../screens/MessagesScreen';
import {Header} from '../header/Header'

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Новости" 
        component={FeedScreen}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => <Header/>,
          headerStyle: {
            
          }

        }} />
      <Tab.Screen name="Поиск" component={SearchScreen} />
      <Tab.Screen name="Сообщения" component={MessagesScreen} />
      <Tab.Screen name="Уведомления" component={NotificationsStack} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

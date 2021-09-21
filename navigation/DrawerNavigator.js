import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {PeopleScreen} from '../screens/galaxy/PeopleScreen';
import {TechnologiesScreen} from '../screens/galaxy/TechnologiesScreen';
import {DrawerContent} from '../drawerContent/DrawerContent';

import R from '../resources/R';

const Drawer = createDrawerNavigator();

export const DarwerStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          title: 'Джедаи и Ситхи',
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
      <Drawer.Screen
        name="TechnologiesScreen"
        component={TechnologiesScreen}
        options={{
          title: 'Технологии',
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
    </Drawer.Navigator>
  );
};

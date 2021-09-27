import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from '../drawerContent/DrawerContent';

import {GalaxyPeopleStack} from './galaxyStack/GalaxyPeopleNavigator';
import {GalaxyTechnologiesStack} from './galaxyStack/GalaxyTechnologiesNavigator';

import R from '../resources/R';

const Drawer = createDrawerNavigator();

export const DarwerStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="PeopleStack"
        component={GalaxyPeopleStack}
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
        name="TechnologiesStack"
        component={GalaxyTechnologiesStack}
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

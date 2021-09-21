import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store/configurationStore';
import {TabStack} from './navigation/TabNavigation';


export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabStack />
      </NavigationContainer>
    </Provider>
  );
};

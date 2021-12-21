import React, { useEffect, useState } from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store/configurationStore';
import {TabStack} from './navigation/TabNavigation';
import { EventRegister } from 'react-native-event-listeners';

export const App = () => {

  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeEventTheme',
      data => {
        setDarkApp(data)
      }
    )

    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer theme={appTheme}>
        <TabStack />
      </NavigationContainer>
    </Provider>
  );
};

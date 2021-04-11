/*
This file will act as a reusable HOC component that will have the same
Stack Navigator throught the app making it easier to scale up the app.
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigatorProps} from '../../types/appTypes';

const Stack = createStackNavigator();

export default function StackNavigator(props: navigatorProps) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={props.initialRouteName}>
        {props.screen.map((value, index) => {
          return (
            <Stack.Screen
              name={value.ScreenName}
              component={value.ScreenComponent}
              options={value.options}
              key={index}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

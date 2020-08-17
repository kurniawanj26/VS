import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Home2} from '../screens';

const Router = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      {/* <AppStack.Screen name="Home2" component={Home2} /> */}
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

export default Router;

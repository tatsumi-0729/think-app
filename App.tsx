import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import TopScreen from '../app/screens/TopScreen'
import MainScreen from './screens/MainScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()

const RootStack = () => (
  <Stack.Navigator initialRouteName="Top">
    <Stack.Screen
      name="Top"
      component={TopScreen}
      options={{
        // headerTitle: 'Top',
        // headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen name="Main" component={MainScreen} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App

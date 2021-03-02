import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainScreen from '../screens/MainScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()

const UserStackNavigation = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{
        headerTitle: 'ユーザー',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TopNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.base}>
        <Text style={styles.title}>「考える」</Text>
        <Image style={
          styles.topImage}
          source={require('../assets/images/thinking.png')}>
        </Image>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  base:{
    alignItems: 'center',
    marginTop:250
  },
  title:{
    color: "#000",
    fontFamily: 'ChalkboardSE-Bold',
    // fontSize: moderateScale(30),
    // height: verticalScale(70),
    // width: scale(150),
    // padding: moderateScale(10),
  },
  topImage:{
    width: 230,
    height: 230,
  }
});

export default TopNavigation

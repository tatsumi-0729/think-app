import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const TopScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container} >
        <Text style={styles.title}>「考える」</Text>
        <Image style={
          styles.topImage}
          source={require('../assets/images/thinking.png')}>
        </Image>
        <Button
          title = ""
          onPress={() => navigation.navigate('Main')}
          // ヘッダーの戻る「＜」を削除
          // onPress={() => navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'Main' }],
          // })}
        />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffafa',
  },
  title:{
    color: "#000",
    fontFamily: 'ChalkboardSE-Bold',
    fontSize: 35,
    // fontSize: moderateScale(30),
    // height: verticalScale(70),
    // width: scale(150),
    // padding: moderateScale(10),
  },
  topImage:{
    margin:35,
    width: 230,
    height: 230,
  }
});

export default TopScreen

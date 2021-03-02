import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native'

const MainScreen = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.info(text);
  },[text])

  return (
    <View style={styles.root}>
      <Text style={styles.question} >何について考える？</Text>
      <TextInput style={styles.input} onChangeText={setText}></TextInput>
      {/* <Text>{text}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffafa',
  },
  input:{
    padding: 12,
    margin:40,
    height: 50,
    width:300,
    backgroundColor:'#fff',
    borderWidth: 1, 
    borderRadius: 8,
    borderColor: "#000",
    fontSize: 20,
    textAlign: 'center',
  },
  question: {
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
  }
})

export default MainScreen

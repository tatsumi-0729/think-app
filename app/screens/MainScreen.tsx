import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native'
import axios from "axios";

const MainScreen = () => {
  const [text, setText] = useState("");

  const postAxios = async () => {
    await axios
    .post("http://localhost:8080/register", text)
    .then(function (res) {
      console.info(res.data);
    })
    .catch(function (error :any) {
      console.info(error);
    });
  }

  return (
    <View style={styles.root}>
      <Text style={styles.question} >何について考える？</Text>
      <TextInput style={styles.input} onChangeText={setText}></TextInput>
      <Button
          title = "send"
          onPress={postAxios}
          // ヘッダーの戻る「＜」を削除
          // onPress={() => navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'Main' }],
          // })}
        />
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

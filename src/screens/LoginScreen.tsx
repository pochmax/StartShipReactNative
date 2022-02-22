import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView ,StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Headline, TextInput, Button, Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from '../components/Header';
import { Routes } from '../navigation/Routes';

export default function LoginScreen({navigation}) {
  
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  return (
    <SafeAreaView style={styles.login}>
      
      <View style={styles.headline}>
        <Header title={"welcome to spaceCraft"}/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input}
          label="Email"
          autoComplete={true}
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput style={styles.password}
          label="Password"
          autoComplete={true}
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View>
        <Button style={styles.button} icon="login" mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </View>

      <View>
        <TouchableOpacity onPress={navigateToTerms}><Text>Read conditions and Terms</Text></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  login: {
    // flex:1,
    backgroundColor: '#fff',
    // textAlign:'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderColor:"black",
    borderWidth: 3,
    margin:30,
    marginTop:60,
  },
  container:{
  },
  headline:{
    backgroundColor:Colors.blue500,
    minHeight:40,
    borderColor:"black",
    textAlign:'center',
    borderBottomWidth: 3
  },
  input:{
    backgroundColor: "red",
    marginTop:80,
    margin:20,
    textAlign:'center',
  },
  password:{
    backgroundColor: "grey",
    marginTop:50,
    margin:20
  },
  button:{
    marginTop:50,
    margin:20,
  },
  conditions: {
    color: Colors.blue500,
    textAlign:'center',
    marginTop:50,
    marginBottom:50
  }
});

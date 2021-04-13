/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Button,
  Alert,
} from 'react-native';
import ChatScreen from './src/ChatScreen';
import LoginScreen from './src/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNFS from 'react-native-fs';
// import data from './MessageData.json';
import RNFetchBlob from 'rn-fetch-blob';

const App = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>123</Text>
      <TextInput
        style={{
          width: 300,
          height: 100,
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 10,
        }}
      />
      <Button
        title="Create json file"
        onPress={() => {
          RNFS.write(
            RNFS.DocumentDirectoryPath + '/data.json',
            '{"data": "1", "id": "2"}',
          );
          // RNFS.readFile(data)
          //   .then((result) => {
          //     // log the file contents
          //     // console.log(result);
          //     console.log(result.id);
          //   })
          //   .catch((err) => {
          //     console.log(err.message, err.code);
          //   });
        }}
      />

      <Button
        title="json file"
        onPress={() => {
          RNFS.readFile(RNFS.DocumentDirectoryPath + '/data.json', 'utf8').then(
            (contents) => {
              // log the file contents
              var jsonFile = JSON.parse(contents);
              Alert.alert(jsonFile.data);
            },
          );
        }}
      />
      {/* <Text>{data}</Text> */}
    </View>
  );
};

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

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
} from 'react-native';
import ChatScreen from './src/ChatScreen';
import LoginScreen from './src/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNFS from 'react-native-fs';
// import data from './MessageData.json';
import RNFetchBlob from 'rn-fetch-blob';

const App = ({navigation, route}) => {
  useEffect(() => {
    if (RNFS.exists(`${RNFS.DocumentDirectoryPath}/data.json`) === true) {
      RNFetchBlob.config({
        // add this option that makes response data to be stored as a file,
        // this is much more performant.
        path: `${RNFS.DocumentDirectoryPath}/data.json`,
      })
        .fetch(
          'GET',
          'https://firebasestorage.googleapis.com/v0/b/iconuplaod.appspot.com/o/MessageData.json?alt=media&token=58f2cdc7-a0f5-4c95-859a-5968fb945408',
        )
        .then((res) => {
          // the temp file path
          console.log('The file saved to ', res.path());
        });
    } else {
      console.log('File exists');
      RNFetchBlob.config({
        // add this option that makes response data to be stored as a file,
        // this is much more performant.
        path: `${RNFS.DocumentDirectoryPath}/data.json`,
      })
        .fetch(
          'GET',
          'https://firebasestorage.googleapis.com/v0/b/iconuplaod.appspot.com/o/MessageData.json?alt=media&token=58f2cdc7-a0f5-4c95-859a-5968fb945408',
        )
        .then((res) => {
          // the temp file path
          console.log('The file saved to ', res.path());
        });
    }
  }, []);
  const data = `${RNFS.DocumentDirectoryPath}/data.json`;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>123</Text>
      <Button
        title="Create json file"
        onPress={() => {
          RNFS.write(RNFS.DocumentDirectoryPath + '/data.json', `${'\n'}ll`, -1);
          console.log(RNFS.exists(data));
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
      {/* <Text>{data}</Text> */}
    </View>
  );
};

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

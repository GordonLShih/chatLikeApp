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
} from 'react-native';
import Input from './Input';
import Messeges from './Messeges';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = ({route, navigation}) => {
  // const [value, onChangeText] = React.useState('');
  const [inputText, setInputText] = React.useState('');
  const [showText, setShowText] = useState('');
  const scrollRef = useRef();
  const [theArray, setTheArray] = useState([<Messeges />, <Messeges />]);
  const [theText, setTheText] = useState('Your mom so fat');
  const [theArrayText, setTheArrayText] = useState([theText]);
  const [textCount, setTextCount] = useState(0);

  const addEntryClick = () => {
    setTheArray([...theArray, <Messeges />]);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#CCC'}}>
      <View
        style={{
          width: '100%',
          height: '8%',
          backgroundColor: '#CCC',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>Terry Liu</Text>
      </View>
      <ScrollView
        style={{width: '100%', backgroundColor: '#fff'}}
        ref={scrollRef}>
        <View style={{height: 30}} />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
          }}>
          <View
            style={{
              width: '13%',
              aspectRatio: 1,
              marginLeft: 20,
              backgroundColor: '#d500e0',
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#DDD',
              alignSelf: 'center',
              borderRadius: 3,
              left: 8,
              transform: [{rotate: '45deg'}],
            }}
          />
          <View
            style={{
              width: '50%',
              height: '80%',
              right: 5,
              backgroundColor: '#DDD',
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
        {theArray}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={'position'}
        style={{width: '100%', height: '8%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            backgroundColor: '#CCC',
            alignItems: 'center',
            justifyContent: 'center',
            // position:'absolute',
            // bottom: 0,
          }}>
          <TextInput
            onChangeText={setInputText}
            value={inputText}
            style={{
              height: '80%',
              aspectRatio: 6.5,
              // width: '85%',
              // marginLeft: 10,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setShowText(inputText);
              setInputText('');
              addEntryClick();
              scrollRef.current.scrollToEnd({animated: true});
              // navigation.navigate('Message', {
              //   theinputText: showText,
              // });
            }}>
            <Image
              source={require('./assets/img/send.png')}
              style={{height: '70%', aspectRatio: 1, marginLeft: 5}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={App} />
        {/* <Stack.Screen name="Message" component={Messeges} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

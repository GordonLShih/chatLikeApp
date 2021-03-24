import React, {useEffect, useState} from 'react';
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
  Platform,
} from 'react-native';

const Input = () => {
  const [inputText, setInputText] = useState('');
  const [showText, setShowText] = useState('');
  return (
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
          }}>
          <Image
            source={require('./assets/img/send.png')}
            style={{height: '70%', aspectRatio: 1, marginLeft: 5}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Input;

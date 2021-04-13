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
  Platform,
} from 'react-native';
import Messeges from './Messeges';
import FriendMesseges from './FriendMessages';
import RNFS from 'react-native-fs';

const ChatScreen = ({navigation, route}) => {
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef();
  const [theArray, setTheArray] = useState([]);
  const [theArrayText, setTheArrayText] = useState(['123']);
  const {itemId, chooseImage} = route.params;
  var textCount = [theArrayText.length];

  const addEntryClick = () => {
    theArrayText.push(inputText);
    console.log('Text Count is ', textCount);
    console.log('the txet is ', theArrayText[textCount]);
    // setTheArray([
    //   ...theArray,
    //   <FriendMesseges FMess={theArrayText[textCount]} />,
    // ]);
    setTheArray([
      ...theArray,
      <Messeges Mess={theArrayText[textCount]} idImage={chooseImage} />,
    ]);
  };

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.headerView}>
        <Text style={styles.userIDText}>{itemId}</Text>
      </View>
      <ScrollView style={styles.containerScroll} ref={scrollRef}>
        <View style={styles.bufferBlock} />
        {/* <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
            backgroundColor:'#000'
          }}
        /> */}
        {theArray}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={'position'}
        style={styles.KeyboardAvoiding}>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(inputText) => setInputText(inputText)}
            value={inputText}
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => {
              // theArrayText.push(inputText);
              addEntryClick();
              console.log(theArrayText);
              setInputText('');
              scrollRef.current.scrollToEnd({animated: true});
            }}>
            <Image
              source={require('../assets/img/send.png')}
              style={styles.sendButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: '#CCC',
  },
  headerView: {
    width: '100%',
    height: '8%',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIDText: {
    fontSize: 30,
  },
  containerScroll: {
    width: '100%',
    backgroundColor: '#fff',
  },
  bufferBlock: {
    height: 30,
  },
  KeyboardAvoiding: {
    width: '100%',
    height: '8%',
  },
  inputView: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
    // position:'absolute',
    // bottom: 0,
  },
  inputText: {
    height: '80%',
    aspectRatio: 6.5,
    // width: '85%',
    // marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    height: '70%',
    aspectRatio: 1,
    marginLeft: 5,
  },
});

export default ChatScreen;

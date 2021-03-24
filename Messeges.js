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
} from 'react-native';

const Messeges = ({route, navigation}) => {
  const [theText, setTheText] = useState('Hi and your mom so skinny');
  const [theArrayText, setTheArrayText] = useState([theText]);
  const [textCount, setTextCount] = useState(0);
  const addEntryClick = () => {
    setTheArrayText([...theArrayText, theText]);
  };
  const addTextCount = () => {
    setTextCount(textCount + 1);
  };
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 5,
        marginBottom: 5,
      }}>
      <View
        style={{
          width: '13%',
          aspectRatio: 1,
          marginRight: 20,
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
          // width: '50%',
          // height: '80%',
          right: 5,
          backgroundColor: '#DDD',
          borderRadius: 10,
          alignSelf: 'center',
          // justifyContent:'center'
        }}>
        <Text
          style={{
            alignSelf: 'center',
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          {theArrayText[textCount]}
        </Text>
      </View>
    </View>
  );
};

export default Messeges;

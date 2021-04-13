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
import PropTypes from 'prop-types';

const Messeges = ({Mess}) => {
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
          {Mess}
        </Text>
      </View>
    </View>
  );
};
Messeges.propTypes = {Mess: PropTypes.string.isRequired};
export default Messeges;

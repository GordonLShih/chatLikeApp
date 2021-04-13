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

const FriendMesseges = ({FMess}) => {
  return (
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
          backgroundColor: '#40ff00',
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
          {FMess}
        </Text>
      </View>
    </View>
  );
};
FriendMesseges.propTypes = {Mess: PropTypes.string.isRequired};
export default FriendMesseges;

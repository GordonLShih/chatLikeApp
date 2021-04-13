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
  Alert,
  Button,
} from 'react-native';

const LoginScreen = ({navigation, route}) => {
  const [inputName, setInputName] = useState('');
  return (
    <View style={styles.containerView}>
      <Text>Enter Your Name</Text>
      <TextInput
        onChangeText={(inputName) => setInputName(inputName)}
        value={inputName}
        style={styles.inputBox}
      />
      <Button
        title="Login"
        onPress={() => {
          // Alert.alert(inputName);
          // setInputName('');
          navigation.navigate('ChatScreen', {
            itemId: inputName,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    height: 30,
    aspectRatio: 6.5,
    // width: '85%',
    // marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;

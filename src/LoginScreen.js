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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const LoginScreen = ({navigation, route}) => {
  const [inputName, setInputName] = useState('');
  const [response, setResponse] = useState(null);

  return (
    <View style={styles.containerView}>
      <Text>Enter Your Name</Text>
      <TextInput
        onChangeText={(inputName) => setInputName(inputName)}
        value={inputName}
        style={styles.inputBox}
      />
      <Button
        title="Login With Image"
        onPress={() => {
          // Alert.alert(inputName);
          // setInputName('');
          launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              setResponse(response);
              navigation.navigate('ChatScreen', {
                itemId: inputName,
                chooseImage: response,
              });
            },
          );
        }}
      />
      <Button
        title="Login With Photo Taken"
        onPress={() => {
          // Alert.alert(inputName);
          // setInputName('');
          launchCamera(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
              saveToPhotos: true,
            },
            (response) => {
              setResponse(response);
              navigation.navigate('ChatScreen', {
                itemId: inputName,
                chooseImage: response,
              });
            },
          );
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

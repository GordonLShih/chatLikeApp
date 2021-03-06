import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GiftedChat, Bubble, Avatar, Time} from 'react-native-gifted-chat';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Your mom so fatdfdfdfdfdfdfdfdf dfdfdfdfdfdfdfdfdfdfdfdfdfdfd',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://i.pinimg.com/236x/54/a4/00/54a4008daad4565a9b5db1b94e59c74c.jpg',
        },
      },
      {
        _id: 3,
        text: 'Y',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://i.pinimg.com/236x/54/a4/00/54a4008daad4565a9b5db1b94e59c74c.jpg',
        },
      },
      {
        _id: 4,
        text: 'Y',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://i.pinimg.com/280x280_RS/ac/cd/e1/accde1bcd977e53ec5d29c934fd0b220.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 2,
        avatar:
          'https://i.pinimg.com/280x280_RS/ac/cd/e1/accde1bcd977e53ec5d29c934fd0b220.jpg',
      }}
      showUserAvatar={true}
      renderAvatarOnTop={true}
      renderBubble={renderBubble}
      renderAvatar={renderAvatar}
      timeFormat={'LT'}
      dateFormat={'LT'}
      showAvatarForEveryMessage={true}
      renderTime={renderTime}
    />
  );
};
const renderBubble = (props) => {
  const styles = StyleSheet.create({
    triangle: {
      width: 10,
      aspectRatio: 1,
      borderRadius: 1,
      transform: [{rotate: '45deg'}],
    },
    leftTriangle: {
      backgroundColor: '#DDD',
      top: 17,
      right: 4,
    },
    rightTriangle: {
      backgroundColor: '#8dcf34',
      left: 3,
      top: 17,
      alignSelf: 'flex-end',
    },
  });
  return (
    <View>
      <View
        style={[
          styles.triangle,
          props.position === 'left'
            ? styles.leftTriangle
            : styles.rightTriangle,
        ]}
      />
      <Time
        {...props}
        timeTextStyle={{
          left: {
            color: 'black',
            alignSelf: 'flex-end',
            position: 'absolute',
            top: 6,
          },
          right: {
            color: 'black',
            alignSelf: 'flex-start',
            position: 'absolute',
            top: 6,
            // backgroundColor: '#DDD',
          },
        }}
      />
      <Bubble
        {...props}
        textStyle={{
          left: {
            color: 'black',
          },
          right: {
            color: 'black',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#DDD',
            borderRadius: 5,
          },
          right: {
            backgroundColor: '#8dcf34',
            borderRadius: 5,
          },
        }}
      />
      {/* <View>
        <Time
          {...props}
          timeTextStyle={{
            left: {
              color: 'black',
              backgroundColor: '#DDD',
            //   position: 'absolute',
              alignSelf: 'flex-end',
            },
            right: {
              color: 'black',
              backgroundColor: '#DDD',
            },
          }}
        />
      </View> */}
    </View>
  );
};
const renderAvatar = (props) => {
  return (
    <Avatar
      {...props}
      imageStyle={{
        left: {
          borderRadius: 3,
          top: 12,
        },
        right: {
          borderRadius: 3,
          top: 11,
        },
      }}
    />
  );
};

const renderTime = (props) => {
  return (
    // <Time
    //   {...props}
    //   timeTextStyle={{
    //     left: {
    //       color: 'black',
    //       alignSelf: 'flex-start',
    //     },
    //     right: {
    //       color: 'black',
    //     },
    //   }}
    // />
    null
  );
};

export default App;

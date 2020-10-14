import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Todos')}>
        <Text>Go to my todos</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import tailwind from 'tailwind-rn';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Todos')}>
        <Text style={tailwind("font-bold uppercase")}>Go to my todos</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

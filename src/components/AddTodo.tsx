import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {addTodo} from '../actions';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  // console.log('store.getState(): ', store.getState());

  return (
    <>
      <TextInput
        placeholder="Add a new item.."
        onChangeText={(text) => {
          setText(text);
        }}>
        {text}
      </TextInput>
      <TouchableOpacity onPress={() => dispatch(addTodo(text))}>
        <View>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AddTodo;

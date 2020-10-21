import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {addTodo} from '../actions';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  // console.log('store.getState(): ', store.getState());

  const dummyTodo = {
    completed: false,
    text: "test todo",
    todoId: 1,
  }

  return (
    <>
      <TextInput
        placeholder="Add a new item.."
        onChangeText={(text) => {
          setText(text);
        }}>
        {text}
      </TextInput>
      <TouchableOpacity onPress={() => dispatch(addTodo(dummyTodo))}>
        <View>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AddTodo;

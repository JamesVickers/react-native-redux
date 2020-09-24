import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import allActions from '../actions'

const AddTodo = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch()
  
  return (
    <>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          placeholder="Add a new item.."
          style={{backgroundColor: '#FFF', height: 50, flex: 1, padding: 10}}
          // value={text}
          onChangeText={(text) => {
            setText(text);
          }}>
          {text}
        </TextInput>
        <TouchableOpacity onPress={() => dispatch(allActions.todosActions.addTodo(uuidv4(), text))}>
          <View
            style={{
              height: 50,
              backgroundColor: '#FFF',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{padding: 10}}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default AddTodo;

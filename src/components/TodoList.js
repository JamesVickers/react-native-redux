import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import allActions from '../actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <View
      style={{
        marginTop: 30,
        padding: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
      }}>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          onPress={() => dispatch(allActions.todosActions.toggleTodo(todo.id))}>
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}>
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default connect()(TodoList);

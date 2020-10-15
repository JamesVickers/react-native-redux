import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {getTodosByVisibilityFilter} from '../selectors';
import {toggleTodo} from '../actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const visibletodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <>
      <Text>Todo list:</Text>
      <ScrollView>
        {visibletodos?.map((todo) => (
          <TouchableOpacity
            key={todo.id}
            onPress={() => dispatch(toggleTodo(todo.todoId))}>
            <Text
              style={{
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default TodoList;

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getTodosByVisibilityFilter} from '../selectors';
import {toggleTodo, removeTodo} from '../types/actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const visibletodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  const isOdd = (num) => num % 2;
  console.log(todos)

  return (
    <>
      <Text>Todo list:</Text>
      <ScrollView>
        {visibletodos?.map((todo) => (
          <TouchableOpacity
            key={todo.todoId}
            onPress={() => dispatch(toggleTodo(todo.todoId))}
            style={{
              backgroundColor: isOdd(todos.indexOf(todo))
                ? null
                : 'rgba(244, 81, 30, 0.2)',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <Text
              style={{
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </Text>
            <TouchableOpacity onPress={() => dispatch(removeTodo(todo.todoId))}>
              <Icon name="close" size={20} color="rgba(244, 81, 30, 1)" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default TodoList;

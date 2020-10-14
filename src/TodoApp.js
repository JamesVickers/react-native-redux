import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {getTodosByVisibilityFilter} from './selectors';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions';

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const visibletodos = getTodosByVisibilityFilter(todos, visibilityFilter);
  const [text, setText] = useState('');

  // console.log('store.getState(): ', store.getState());

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View>
          <TextInput
            placeholder="Add a new item.."
            onChangeText={(text) => {
              setText(text);
            }}>
            {text}
          </TextInput>
          <TouchableOpacity onPress={() => dispatch(addTodo(text))}>
            <View>
              <Text>AddTodo component</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text>TodoList component</Text>
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
        </View>

        <View>
          <Text>Filter todos:</Text>
          <View>
            <TouchableOpacity
              onPress={() => dispatch(setVisibilityFilter(SHOW_ALL))}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(setVisibilityFilter(SHOW_ACTIVE))}>
              <Text>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(setVisibilityFilter(SHOW_COMPLETED))}>
              <Text>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 30,
  },
});

export default TodoApp;

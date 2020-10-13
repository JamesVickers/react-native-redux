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
import store from './store';
import {addTodo, toggleTodo} from './actions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState('');

  console.log('store.getState(): ', store.getState());

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
          {todos?.map((todo) => (
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

        {/* <View>
          <Text>Filter todos:</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text style={{textAlign: 'center'}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => dispatch(allActions.visibilityActions.showIncompletedTodos())}
            >
              <Text style={{textAlign: 'center'}}>Incompleted</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{textAlign: 'center'}}>Completed</Text>
            </TouchableOpacity>
          </View>
        </View> */}
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

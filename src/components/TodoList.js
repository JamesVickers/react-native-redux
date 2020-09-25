import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux'
import allActions from '../actions'


const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos);

  return (
      <View>
        {todos.map(todo => 
            <TouchableOpacity key={todo.id} onPress={() => dispatch(allActions.todosActions.toggleTodo(todo.id))}>
                <Text style={{fontSize:24, textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
            </TouchableOpacity>
        )}
      </View>
  )
};


export default connect()(TodoList)


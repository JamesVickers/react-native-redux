import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

const TodoList = ({ todos, toggleTodo }) => {
  return (
      <View>
        {todos.map(todo => 
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{fontSize:24, textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
            </TouchableOpacity>
        )}
      </View>
  )
};

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


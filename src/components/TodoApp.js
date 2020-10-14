import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodosFilter from './TodosFilter';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin: 10%;
`;

const TodoApp = () => {
  // console.log('store.getState(): ', store.getState());

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StyledSafeAreaView>
        <AddTodo />
        <TodoList />
        <TodosFilter />
      </StyledSafeAreaView>
    </>
  );
};

export default TodoApp;

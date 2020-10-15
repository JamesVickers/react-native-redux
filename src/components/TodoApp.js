import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Card from './Card';
import ScrollViewCard from './ScrollViewCard';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodosFilter from './TodosFilter';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin: 5%;
`;

const TodoApp = () => {
  // console.log('store.getState(): ', store.getState());

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StyledSafeAreaView>
        <Card>
          <AddTodo />
        </Card>
        <Card>
          <TodosFilter />
        </Card>
        <ScrollViewCard flexGrow={1}>
          <TodoList />
        </ScrollViewCard>
      </StyledSafeAreaView>
    </>
  );
};

export default TodoApp;

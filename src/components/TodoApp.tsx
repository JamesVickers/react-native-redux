import React, {useContext} from 'react';
import {StatusBar, Text} from 'react-native';
import styled from 'styled-components/native';
import ThemeContext from '../context/ThemeContext';
import Card from './Card';
import ScrollViewCard from './ScrollViewCard';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodosFilter from './TodosFilter';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin: 3%;
`;

const TodoApp = () => {
  const theme = useContext(ThemeContext);
  // console.log('store.getState(): ', store.getState());

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StyledSafeAreaView>
        <Card>
          <Text>Theme: {theme.lightTheme.type}</Text>
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

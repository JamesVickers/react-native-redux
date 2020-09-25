import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityButtons from './components/VisibilityButtons';

const TodoApp = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      {/* <ScrollView */}
      {/* contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}> */}

      <View style={styles.body}>
        <AddTodo />
        <TodoList />
        <VisibilityButtons />
      </View>

      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
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

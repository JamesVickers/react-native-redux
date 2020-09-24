import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native';
import AddTodo from './containers/AddTodo'
import TodoList from './components/TodoList'


const TodoApp = () => {
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView> */}
          {/* <ScrollView */}
            {/* contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}> */}
    
            <View style={ styles.body }>
                <AddTodo />
            </View>

            <View>
                <TodoList />
            </View>

          {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </>
    );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 40
  }
});

export default TodoApp;

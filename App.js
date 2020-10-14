import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoApp from './src/components/TodoApp';
import HomeScreen from './src/components/HomeScreen';
import store from './src/store';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'My homescreen',
                }}
              />
              <Stack.Screen name="Todos" component={TodoApp} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </>
    );
  }
}

export default App;

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from './src/context/ThemeContext';
import theme from './src/styles/ThemeStyles';
import TodoApp from './src/components/TodoApp';
import HomeScreen from './src/components/HomeScreen';
import store from './src/store';

const Stack = createStackNavigator();

const App = () => {
  // const [lightTheme, setLightTheme] = useState(true);
  // const toggleTheme = () => setTheme((preState = !prevState));

  return (
    <>
      <Provider store={store}>
        <ThemeProvider value={theme}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: 'rgba(244, 81, 30, 1)',
                },
                headerTintColor: 'rgba(255, 255, 255, 1)',
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
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;

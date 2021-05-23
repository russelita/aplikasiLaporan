import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/Store';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/page/Home';
import { Register } from './src/page/Register';

const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="registrasi" component={Register}/>
            {/* <Stack.Screen name="login" component={Login}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;




// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

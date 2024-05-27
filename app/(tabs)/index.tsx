import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>My name is Gabby</Text>
    </View>
  );
};

 export default App;
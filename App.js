// Made by Taha Bisgin.
// ©TahaBisginSoftware, all rights reserved.

//import the needed packages
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import the Homescreen Component (index.js)
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

//styles component for the design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0c1d',
  },
});

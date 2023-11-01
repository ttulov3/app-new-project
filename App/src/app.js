import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Quadrado from './components/Layout/Quadrado';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Quadrado cor="#009"/>
      <Quadrado cor="#007"/>
      <Quadrado cor="#005"/>
      <Quadrado cor="#003"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
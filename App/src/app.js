import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Flexbox from './components/Layout/Flexbox';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Flexbox/>
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
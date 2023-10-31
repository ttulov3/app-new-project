import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ListaProdutosV2 from './components/Produto/ListaProdutosV2.js';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutosV2/>
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
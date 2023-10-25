import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Familia from './components/relacao/Familia';
import Membros from './components/relacao/Membros';


export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Familia>
      <Membros nome="Luiza" sobrenome="Silva"/>
      <Membros nome="Arthur" sobrenome="Silva"/>
      </Familia>
      <Familia>
        <Membros nome="João" sobrenome="Silva"/>
      </Familia>
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
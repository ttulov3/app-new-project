import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//import FlexboxV1 from './components/Layout/FlexboxV1';
//import FlexboxV2 from './components/Layout/FlexboxV2';
//import FlexboxV3 from './components/Layout/FlexboxV3';
//import FlexboxV4 from './components/Layout/FlexboxV4';

import Mega from './components/mega/mega';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Mega/>
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
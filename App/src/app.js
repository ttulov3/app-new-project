import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Primeiro from "./components/primeiro";
import {Comp, Comp2, Comp3 } from './components/multiplo';

export default function App(){
    return(
        <SafeAreaView style={style.App}>
            <Primeiro/>
            <Comp/>
            <Comp2/>
            <Comp3/>
        </SafeAreaView>
    )
    const style = StyleSheet.create ({
        App: {
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
        }
    })
}
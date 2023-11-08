import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props =>{
    return(
    <View style={style.flexV4}>
          <View style={style.flexV0}></View>
          <View style={style.flexV1}></View>
          <View style={style.flexV2}></View>
    </View>
    )
}

const style = StyleSheet.create({
    flexV4:{
        flexGrow:1,
        width:100,
        backgroundColor:'#000'
    },
    V0:{
        backgroundColor: '#36c9a7',
        height: 300
    },
    V1:{
        backgroundColor: '#ff800',
        flexGrow: 3
    },
    V2:{
        backgroundColor: '#36c9a7',
        height: 300
    }
}










)
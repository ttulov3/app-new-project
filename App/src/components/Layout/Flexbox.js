import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props =>{
return(
<View style={style.FlexV1}>
      <Quadrado cor="#009"/>
      <Quadrado cor="#007"/>
      <Quadrado cor="#005"/>
      <Quadrado cor="#003"/>
</View>
)
}

const style = StyleSheet.create({
    flexV1:{
        flexGrow: 1,
        backgroundColor: '#000'
    }
})
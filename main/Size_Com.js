

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Size_Com = function ({ navigation, data, goto_size, size }) {
 //console.log(data, '사이즈')

 const desing_text = function () {
  if (data == size) {
   return (
    {
     color: 'white',
     fontFamily: 'Rn',
     fontSize: 13,
     textAlign: 'center',
     fontWeight: 'bold',
     //backgroundColor: 'blue',
    }
   )
  }
  else {
   return (
    {
     color: 'black',
     fontFamily: 'Rn',
     fontSize: 13,
     textAlign: 'center',
     fontWeight: 'bold',
     //backgroundColor: 'blue'
    }
   )

  }

 }


 const design_size = function () {
  if (data == size) {
   return (
    {
     width: 55,
     height: 25,
     backgroundColor: 'black',
     display: 'flex',
     borderWidth: 1,
     justifyContent: 'center',
     margin: 10
    }
   )
  }
  else {
   return (
    {
     width: 55,
     height: 25,
     backgroundColor: 'white',
     display: 'flex',
     borderWidth: 1,
     justifyContent: 'center',
     margin: 10
    }
   )
  }

 }




 return (

  <View style={
   design_size()

  }>
   <TouchableOpacity onPress={() => goto_size(data)}>
    <Text style={
     desing_text()
    }> {data[0]}</Text>
   </TouchableOpacity>


  </View>
 )

}


export default Size_Com;

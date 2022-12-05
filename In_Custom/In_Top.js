

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const In_Top = function ({ navigation }) {
 return (
  <View style={{

   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height < 380 ? 50 : 70,
   marginTop: Dimensions.get('window').height < 380 ? 25 : 35,
   //borderRadius:5,
   justifyContent: 'center',
   flexDirection: 'row',

  }}>
   <View style={{
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height < 380 ? 50 : 60,
    //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
    borderRadius: 5,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

   }}>
    <TouchableOpacity onPress={() => navigation.pop()}>
     <Ionicons style={{
      margin: 15
     }} name="chevron-back" size={26} color="black" />
    </TouchableOpacity>

    <Image
     style={{
      width: 60,
      height: 35
      , margin: 10
     }}
     source={require('../assets/logo.png')}
    />
    <Entypo style={{
     margin: 15
    }} name="heart" size={26} color="black" />
   </View>


  </View >

 )

}

export default In_Top;



import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Main_Com = function ({ navigation }) {
 return (
  <View style={{

   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height < 380 ? 50 : 70,
   marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
  borderRadius:5,
   justifyContent: 'center',
   flexDirection: 'row',

  }}>
   <View style={{
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height < 380 ? 50 : 60,
    //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
   borderRadius:5,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

   }}>
    <Ionicons
     style={{
      margin: 15
     }}
     name="menu-outline" size={26} color="black" />
    <Image
     style={{
      width: 60,
      height: 45
      , margin: 10
     }}
     source={require('../assets/logo.png')}
    />
    <Ionicons
     style={{
      margin: 15
     }}
     name="search-outline" size={23} color="black" />
   </View>


  </View>

 )

}

export default Main_Com;

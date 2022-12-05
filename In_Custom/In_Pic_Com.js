

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AutoHeightImage from 'react-native-auto-height-image';
const In_Pic_Com = function ({ navigation, pic }) {
 console.log(pic)
 return (
  <View style={{
   width: Dimensions.get('window').width,
   height: '100%',
   //backgroundColor: 'blue',
   flexDirection: 'row'

  }}>


   <Image
    style={{
     width: '100%',
     height: '90%',
     resizeMode: "cover"
    }}
    source={{ uri: pic }}
   ></Image>



  </View >

 )

}

export default In_Pic_Com;



import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import In_Pic_Com from "./In_Pic_Com";
import { FontAwesome5 } from '@expo/vector-icons';
const In_Pic = function ({ navigation }) {

 const pic = ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/20904ed1c70c46c1babeae9400e3e1db_9366/NMD_V3_Grey_GY9522_01_standard.jpg',

  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d71f01ba6dba44c694caae9400e3f2b8_9366/NMD_V3_Grey_GY9522_02_standard_hover.jpg'
  ,
  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0a4c5c0b83c4250b545ae9400e40502_9366/NMD_V3_Grey_GY9522_04_standard.jpg',
  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/547a62036d9b40069657ae9400e40ef9_9366/NMD_V3_Grey_GY9522_05_standard.jpg'
 ]
 return (


  <ScrollView horizontal={true}
  >
   {pic.map((el, index) => {
    return <In_Pic_Com pic={el} key={index}></In_Pic_Com>
   })}
  </ScrollView>


 )

}

export default In_Pic;

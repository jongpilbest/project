

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AutoHeightImage from 'react-native-auto-height-image';
const Adver = function ({ navigation }) {
 return (
  <View style={{

   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height < 380 ? 190 : 200,
   marginTop: Dimensions.get('window').height < 380 ? 15 : 15,
   borderRadius: 5,
   justifyContent: 'center',
   flexDirection: 'row',
   //backgroundColor: 'pink'

  }}>
   <View style={{
    //backgroundColor: '#91A6C7',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height < 380 ? 190 : 200,
    //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
    borderRadius: 5,

    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center'
   }}>
    <AutoHeightImage
     borderRadius={5}
    height={Dimensions.get('window').height < 380 ? 190 : 210}
    width={Dimensions.get('window').width * 0.9}
    source={require('../assets/Image/shie10.png')}
   />



   </View>
  </View >

 )

}

export default Adver;

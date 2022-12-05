

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Main_text = function ({ navigation }) {
 return (
  <View style={{

   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height < 380 ? 50 : 60,
   marginTop: Dimensions.get('window').height < 380 ? 3 : 5,
   borderRadius: 5,
   justifyContent: 'center',
   flexDirection: 'row',
   //backgroundColor: 'blue'

  }}>
   <View style={{
    //backgroundColor: 'pink',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height < 380 ? 40 : 50,
    marginTop: Dimensions.get('window').height < 380 ? 5 : 10,
    borderRadius: 5,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

   }}>
    <Text style={{
     fontFamily: 'ExtraBold',
     fontSize: 22,
     marginRight: 10
    }}>
     Best Seller
    </Text>
   </View>
  </View >
 )

}

export default Main_text;

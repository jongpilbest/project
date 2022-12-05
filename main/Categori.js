

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Categori = function ({ navigation }) {
 return (

  <View style={{
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height < 380 ? 50 : 60,
   marginTop: Dimensions.get('window').height < 380 ? 10 : 20,
   borderRadius: 10,
   justifyContent: 'center',
   flexDirection: 'row',
   // backgroundColor: 'blue'

  }}>
   <View style={{
    //backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height < 380 ? 70 : 75,
    marginTop: Dimensions.get('window').height < 380 ? 3 : 5,
    borderRadius: 5,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

   }}>


    <ScrollView
     showsHorizontalScrollIndicator={false}
     horizontal={true}>
     <View style={{
      width: 90,
      height: 40,
      backgroundColor: '#ECECEC',
      marginRight: 10,
      //marginLeft: 10,
      justifyContent: 'center',
      borderRadius: 5,
      //borderColor: '#91A6C7',
      //borderWidth: 1
     }}>
      <Text style={{
       textAlign: 'center',
       fontFamily: 'ExtraBold',
       fontSize: 13

      }}>Originals</Text>

     </View>
     <View style={{
      width: 90,
      height: 40,
      backgroundColor: '#ECECEC',
      marginRight: 10,
      marginLeft: 10,
      justifyContent: 'center',
      borderRadius: 5,

      //orderColor: '#91A6C7',
      //borderWidth: 1
     }}>
      <Text style={{
       textAlign: 'center',
       fontFamily: 'ExtraBold',
       fontSize: 13

      }}>Running</Text>

     </View>
     <View style={{
      width: 90,
      height: 40,
      backgroundColor: '#ECECEC',
      marginRight: 10,
      marginLeft: 10,
      justifyContent: 'center',
      borderRadius: 5,


     }}>
      <Text style={{
       textAlign: 'center',
       fontFamily: 'ExtraBold',
       fontSize: 13

      }}>Trainning</Text>

     </View>
     <View style={{
      width: 90,
      height: 40,
      backgroundColor: 'white',
      marginRight: 10,
      marginLeft: 10,
      justifyContent: 'center',
      borderRadius: 5,
      borderRadius: 20,
      borderColor: '#91A6C7',
      borderWidth: 1
     }}>
      <Text style={{
       textAlign: 'center',
       //fontFamily: 'ExtraBold',
       fontSize: 13

      }} >아웃도어</Text>

     </View>
    </ScrollView>
   </View>
  </View>

 )

}

export default Categori;

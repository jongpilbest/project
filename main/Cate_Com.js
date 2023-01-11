

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Cate_Com = function ({ navigation, data }) {


 return (

  <View style={{
   width: '50%',
   height: Dimensions.get('window').height / 4,
   backgroundColor: '#F0F0F0',
   borderColor: 'white',
   borderWidth: 2

  }}>
   <TouchableOpacity onPress={() => navigation.navigate('Ca_in', { categori: '오리지널스' })}>
    <View style={{
     width: '100%',
     height: '100%',
     //backgroundColor: 'blue'
    }}>
     <Image

      resizeMode="cover"
      style={{
       width: '100%',
       height: '100%',

       resizeMode: 'contain'
      }}
      source={{ uri: data.image }}
     />

     <View style={{
      width: '80%',
      height: 25,
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
     }}>
      <Text style={{
       fontFamily: 'Rn',
       color: 'white',
       fontsize: 13,
       textAlign: 'center'
      }}>
       {data.name}
      </Text>

     </View>


    </View>

    <View>

    </View>
   </TouchableOpacity>
  </View>



 )

}


export default Cate_Com;



import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import Maii from "./Maii"
import { AntDesign } from '@expo/vector-icons';
import Maii from "../main/Maii";
import In_Pic from "./In_Pic";
import In_Top from "./In_Top";
const In_main = function ({ navigation }) {

  return (

    <View style={{
      backgroundColor: '#ECEFF1',
      marginRight: 10,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      borderRadius: 5,
      marginTop: 10,

    }}>
      <SafeAreaView  >
        <In_Top

          navigation={navigation}></In_Top>
      </SafeAreaView>


      <View style={{

        width: Dimensions.get('window').width,
        height: '100%',
        // marginTop: Dimensions.get('window').height < 380 ? 15 : 15,
        borderRadius: 5,
      justifyContent: 'center',
      flexDirection: 'row',

      }}>
      <View style={{
        //backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: '100%',
        //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
        borderRadius: 5



        }}>

      <View style={{
        flex: 3,
        //backgroundColor: 'pink',
        width: Dimensions.get('window').width * 1,
      }}>


        <In_Pic></In_Pic>

      </View>

      <View style={{
        flex: 2,
        width: '100%',
        backgroundColor: 'white',
      }}>

      </View>


    </View>
      </View >


    </View >
  )

}
In_main.navigationOptions = () => {
  return {
    header: () => false,
  };
};
export default In_main;

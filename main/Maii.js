

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const Maii = function ({ navigation }) {
  return (
    <View style={{

      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height < 380 ? 140 : 150,
      marginTop: Dimensions.get('window').height < 380 ? 25 : 35,
      borderRadius: 5,
      justifyContent: 'center',
      flexDirection: 'row',

    }}>
      <View style={{
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#ECECEC',
        borderRadius: 5,

        height: Dimensions.get('window').height < 380 ? 120 : 130,
      }}>


        <View style={{
          backgroundColor: '#ECECEC',
          width: Dimensions.get('window').width * 0.9,
          height: Dimensions.get('window').height < 380 ? 50 : 60,
          //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
          borderRadius: 5,

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
              height: 35
              , margin: 10
            }}
            source={require('../assets/logo.png')}
          />
          <Ionicons
            style={{
              margin: 10

            }}
            name="notifications-outline" size={25} color="black" />

        </View>

        <View style={{
          // backgroundColor: 'blue',
          width: '100%',
          height: Dimensions.get('window').height < 380 ? 50 : 60,
          justifyContent: 'center',
          display: 'flex'

        }}>
          <View style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width * 0.8,
            height: Dimensions.get('window').height < 380 ? 40 : 40,
            marginLeft: 'auto',
            marginRight: 'auto'

          }}>
            <EvilIcons
              style={{
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
              name="search" size={30} color="black" />
          </View>

        </View>
      </View >


    </View >

  )

}

export default Maii;

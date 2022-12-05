

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Owner = function ({ navigation }) {
  return (

    <View style={{

      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height < 380 ? 50 : 60,
      marginTop: Dimensions.get('window').height < 380 ? 5 : 5,
      borderRadius: 5,
      justifyContent: 'center',
      flexDirection: 'row',
      display: 'flex'

    }}>
      <View style={{
        //backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height < 380 ? 70 : 75,
        //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
        borderRadius: 5,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

      }}>
        <View style={{
          width: '75%',
          height: '100%',
          //backgroundColor: 'black'
          justifyContent: 'center',

        }}>
          <View style={{
            flexDirection: 'row',

          }}>
            <Text style={{
              fontFamily: 'Bold',
              fontSize: 22,
              marginRight: 10
            }}>
              Hello
            </Text>
            <Text style={{
              fontSize: 21,

            }}>
              미수
            </Text>
          </View>


          <Text style={{
            //fontFamily: 'Bold',
            fontSize: 12,
            marginRight: 10
          }}>
            미확인 알람이 3개 존재합니다
          </Text>

        </View>
        <View style={{
          //backgroundColor: 'black',
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        </View>

      </View>
    </View >
  )

}

export default Owner;

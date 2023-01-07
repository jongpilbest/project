

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import Lii_Com from "./Lii_Com";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

import Like_Com from "./Like_Com";
import Like_List_api from "./Like_List_api";
const Like_List = function ({ navigation }) {
  const token = useSelector((state) => state.token.token);
  const cart = useSelector((state) => state.token.cart);

  const [like, setlike] = useState([]);

  console.log('접근', cart);

  console.log(cart, '카트뭐요?')
  useEffect(() => {

    console.log(cart, '변경되는가?');
    setlike(cart);
  }), [cart];



  return (

    <View style={{
      backgroundColor: '#F2F5F6',
      marginRight: 10,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      borderRadius: 5,


    }}>

      <View style={{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 1.6,
        display: 'flex',
        alignItems: 'center',

      }}>

        <View style={{
          width: '90%',
          backgroundColor: 'white',
          height: 50,

          //  backgroundColor: 'black'

          // justifyContent: 'space-between'
        }}>


          <View style={{
            width: '30%',
            height: 30,
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'pink',
            flexDirection: 'row',
            marginTop: 'auto',
            marginBottom: 'auto',

          }}>
            <Text
              style={{
                fontFamily: 'Rn',
                fontSize: 14,

                textDecorationLine: 'underline',

              }}
            > 세일</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Top_men')
            }}>
              <Text
                style={{
                  fontFamily: 'Rn',
                  fontSize: 14
                }}
              > 품절</Text>

            </TouchableOpacity>


          </View>


        </View>
        <ScrollView>
          <View style={{
            backgroundColor: 'white',
            flexDirection: "row",
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 5,
            //backgroundColor: 'pink'


            //flexWrap: "wrap",
            display: 'flex'
          }}>

            <View style={{
              width: '100%',
              height: '100%'
            }}>
              {

                like.map((el, inex) => {
                  return <Lii_Com key={inex} data={el}></Lii_Com>
                })
              }
            </View>


          </View>
        </ScrollView>
      </View >






    </View >
  )

}
Like_List.navigationOptions = () => {
  return {
    title: <Text style={{
      fontFamily: 'Rn',
      textAlign: 'center',
      fontSize: 15
    }}> 선호상품 </Text>,

  };
};
export default Like_List;

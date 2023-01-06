

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import Like_Com from "./Like_Com";

import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
const Like_List = function ({ navigation }) {
 const [like, setlike] = useState([]);
 const token = useSelector((state) => state.token.token);
 const get_Cart = function () {
  axios.get('http://192.168.0.5:3000/like', {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
   //성공시 then 실행
   .then(function (response) {
    setlike(response.data);

   }).catch(function (error) {

    console.log(err);
   });

 }
 useEffect(() => {


  get_Cart();



 }, [])

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
    <View style={{
     backgroundColor: 'white',
     flexDirection: "row",
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
     backgroundColor: 'white'
     ,
     flexWrap: "wrap",
     display: 'flex'
    }}>
     <ScrollView>
      {like.map((el, index) => {
       return <Like_Com key={index} data={el}>
       </Like_Com>
      })}
     </ScrollView>

    </View>

   </View>






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

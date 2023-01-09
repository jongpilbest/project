

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

const Lii_Com = function ({ data, gogo_delte }) {

 console.log(data);

 return (
  <View>


   <View style={{
    width: '90%',
    height: Dimensions.get('window').height / 5,
    backgroundColor: '#F0F0F0',
    margin: 5,
    alignSelf: 'center',
    flexDirection: 'row'
   }}>

    <View style={{
     width: '40%',
     height: '100%',
     backgroundColor: 'blue'
    }}>

     <Image

      resizeMode="cover"
      style={{
       width: '100%',
       height: '100%'

      }}
      source={{ uri: data.productId.productId.product_image[0] }}
     />
    </View>
    <View style={{
     width: '60%',
     height: '100%',
     //backgroundColor: 'pink',
     flexDirection: 'column'
    }}>
     <TouchableOpacity onPress={() => {
      gogo_delte(data.productId.productId._id, data.size.size);
     }}>
      <Feather style={{
       position: 'absolute',
       bottom: 15,
       right: 10
      }} name="x" size={20} color="black" />
     </TouchableOpacity>

     <Text style={{
      fontFamily: 'Rn',
      fontSize: 14,
      marginLeft: 10,
      marginTop: 10
     }}>라트비아 22 홈 저지</Text>
     <Text style={{
      fontFamily: 'Rn',
      color: '#808080',
      fontSize: 11,
      marginLeft: 10
     }}>남성 • Football
     </Text>
     <View style={{
      width: '90%',
      height: 19,
      //backgroundColor: 'yellow',
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 2
     }}>
      <View style={{
       width: '30%',
       height: '100%'
      }}>
       <Text style={{
        fontFamily: 'Rn',
        fontSize: 13,
        marginLeft: 5
       }}> 사이즈</Text>
      </View>

      <View style={
       {
        width: '60%',
        height: '100%',
        backgroundColor: 'white',
        marginLeft: 10,
        display: 'flex',
        //alignItems: 'flex-end'
       }
      }>
       <View>
        <Text>
         {data.size.size}
        </Text>
       </View>
       <View>
        <AntDesign style={{
         marginRight: 5
        }} name="caretdown" size={15} color="black" />
       </View>
      </View>

     </View>
     <View style={{
      width: '90%',
      height: 19,
      //backgroundColor: 'yellow',
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 2
     }}>
      <View style={{
       width: '30%',
       height: '100%'
      }}>
       <Text style={{
        fontFamily: 'Rn',
        fontSize: 13,
        marginLeft: 5
       }}> 수량</Text>
      </View>

      <View style={
       {
        width: '60%',
        height: '100%',
        backgroundColor: 'white',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'flex-end'
       }
      }>
       <Text>
        {data.size.quantity}
       </Text>
       <AntDesign style={{
        marginRight: 5
       }} name="caretdown" size={15} color="black" />
      </View>
     </View>


     <View>
     </View>
     <View style={{
      width: '90%',
      height: 19,
      //backgroundColor: 'black',
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 2
     }}>
      <View style={{
       width: '30%',
       height: '100%',
       backgroundColor: '#F0F0F0'
      }}>

      </View>
      <View style={
       {
        width: '60%',
        height: '100%',
        backgroundColor: 'black',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'flex-end',

       }
      }>
       <Text style={{
        fontFamily: 'Rn',
        color: 'white',
        fontSize: 13,
        marginTop: 'auto',
        marginBottom: 'auto'
       }}> {data.productId.productId.price}</Text>

      </View>
     </View>
    </View>
   </View>
  </View>
 )

}


export default Lii_Com;

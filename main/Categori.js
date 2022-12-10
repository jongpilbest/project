

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from "react-native-gesture-handler";


const Categori = function ({ navigation }) {

 return (
  <ScrollView>
   <View style={{
    backgroundColor: 'white',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,


    //ustifyContent: "space-between",
    alignItems: 'center'
    , justifyContent: 'center',
    display: 'flex'

   }}>
    <View style={{
     backgroundColor: 'white',
     flexDirection: "row",
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
     backgroundColor: 'black'
     ,
     flexWrap: "wrap",
    }}>


     <View style={{
      width: '50%',
      height: Dimensions.get('window').height / 4,
      backgroundColor: '#F0F0F0',
      borderColor: 'white',
      borderWidth: 2

     }}>
      <TouchableOpacity onPress={() => navigation.navigate('Ca_in')}>
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
         source={require('../assets/Image_2/31.png')}
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
          오리지널스
         </Text>

        </View>


       </View>

       <View>

       </View>
      </TouchableOpacity>
     </View>

     <View style={{
      width: '50%',
      height: Dimensions.get('window').height / 4,
      backgroundColor: '#F0F0F0',
      borderColor: 'white',
      borderWidth: 2
     }}>
      <View style={{
       width: '100%',
       height: '80%',
       //backgroundColor: 'blue'
      }}>
       <Image

        resizeMode="cover"
        style={{
         width: '100%',
         height: '100%'

        }}
        source={require('../assets/Image_2/20.png')}
       />

       <View style={{
        width: 80,
        height: 25,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0
       }}>
        <Text style={{
         fontFamily: 'Rn',
         color: 'white',
         fontsize: 13,
         marginLeft: 10
        }}>
         ₩18900
        </Text>

       </View>


      </View>
      <View>

      </View>

     </View>
     <View style={{
      width: Dimensions.get('window').width / 2.12,
      height: Dimensions.get('window').height / 4,
      backgroundColor: '#F0F0F0',

     }}>
      <View style={{
       width: '100%',
       height: '80%',
       //backgroundColor: 'blue'
      }}>
       <Image

        resizeMode="cover"
        style={{
         width: '100%',
         height: '100%'

        }}
        source={require('../assets/Image_2/20.png')}
       />

       <View style={{
        width: 80,
        height: 25,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0
       }}>
        <Text style={{
         fontFamily: 'Rn',
         color: 'white',
         fontsize: 13,
         marginLeft: 10
        }}>
         ₩18900
        </Text>

       </View>


      </View>
      <View>

      </View>

     </View>
    </View>
   </View >
  </ScrollView >
 )

}
Categori.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}> Categori </Text>,

 };
};
export default Categori;

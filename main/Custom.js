

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, ScrollView, StyleSheet, Text, Dimensions } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AutoHeightImage from 'react-native-auto-height-image';
const Custom = function ({ navigation }) {
 const [click, setclick] = useState(0);
 const image_cja = [<Fontisto name="bookmark-alt" size={25} color="black" />, <Fontisto name="bookmark" size={25} color="black" />]

 return (
  <View style={{

   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height * 2,
   // marginTop: Dimensions.get('window').height < 380 ? 15 : 30,
   borderRadius: 5,
   justifyContent: 'center',
   flexDirection: 'row',

  }}>
   <View style={{
    // backgroundColor: '#91A6C7',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 2,
    //marginTop: Dimensions.get('window').height < 380 ? 15 : 20,
    borderRadius: 5,



   }}>

    <ScrollView
     //horizontal={true}
     showsHorizontalScrollIndicator={false}
    >
     <View style={{
      flexDirection: "row",
      flexWrap: "wrap",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      paddingHorizontal: 16,
      paddingTop: 10,
      justifyContent: "space-between",
      paddingBottom: 80,
      //backgroundColor: 'blue'
     }}>


      <View style={{
       width: Dimensions.get('window').width * 0.44,
       height: Dimensions.get('window').height < 380 ? 190 : 200
       , backgroundColor: '#ECECEC',
       borderRadius: 5

      }}>
       <TouchableOpacity onPress={() => {
        navigation.navigate('In_main')

       }}>

        <View >

         <AutoHeightImage
          borderRadius={5}
          width={Dimensions.get('window').width * 0.44}
          source={require('../assets/Image/shoe10.png')}
         />



         <View style={{
          position: 'absolute',
          top: 10,
          right: 10,
          // backgroundColor: 'blue'
         }}>
          <TouchableOpacity onPress={() => {
           console.log(click)
           if (click == 0) {
            setclick(1);

           }
           else {
            setclick(0);
           }
          }}>
           {
            image_cja[click]

           }
          </TouchableOpacity>
         </View>


        </View>

        <Text style={{
         fontSize: 17,
         fontFamily: 'ExtraBold',
         marginLeft: 10,
         marginTop: 15
        }}>
         NMD V3
        </Text>
        <Text style={{
         fontSize: 10,
         fontFamily: 'Bold',
         marginLeft: 10
        }}>
         Woman originals
        </Text>
        <Text style={{
         fontSize: 15,
         // fontFamily: 'Bold',
         marginLeft: 10
        }}

        >
         ₩18900
        </Text>

       </TouchableOpacity>
      </View>

      <View style={{
       width: Dimensions.get('window').width * 0.44,
       height: 30,
       backgroundColor: 'pink',
       //marginRight: 10,
       //marginLeft: 10,
       justifyContent: 'center',
       borderRadius: 5,
       alignContent: 'stretch'
      }}>
       <Text style={{
        textAlign: 'center',
        //fontFamily: 'ExtraBold',
        fontSize: 13

       }}>오리지널스</Text>

      </View>
      <View style={{
       width: Dimensions.get('window').width * 0.44,
       height: 30,
       backgroundColor: 'pink',
       //marginRight: 10,
       //marginLeft: 10,
       justifyContent: 'center',
       borderRadius: 5
       ,
       alignContent: 'stretch'
      }}>
       <Text style={{
        textAlign: 'center',
        //fontFamily: 'ExtraBold',
        fontSize: 13

       }}>오리지널스</Text>

      </View>



     </View >
    </ScrollView >
   </View >
  </View >
 )

}

export default Custom;

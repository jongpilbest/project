

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from "react-native-gesture-handler";


const Ca_in = function ({ navigation }) {

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

   }}>

    <View style={{
     width: '100%',
     backgroundColor: 'white',
     height: 50,

     // justifyContent: 'space-between'
    }}>


     <View style={{
      width: '80%',
      height: 30,
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'pink',
      flexDirection: 'row',
      marginTop: 'auto',
      marginBottom: 'auto'
     }}>
      <Text
       style={{
        fontFamily: 'Rn',
        fontSize: 14,

        textDecorationLine: 'underline',
       }}
      > 판매순</Text>
      <TouchableOpacity onPress={() => {
       navigation.navigate('Top_men')
      }}>
       <Text
        style={{
         fontFamily: 'Rn',
         fontSize: 14
        }}
       > 신상품푼</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
       navigation.navigate('Top_kid')
      }}>

       <Text
        style={{
         fontFamily: 'Rn',
         fontSize: 14
        }}
       > 낮은 가격순</Text>
      </TouchableOpacity>

     </View>


    </View>
    <View style={{
     backgroundColor: 'white',
     flexDirection: "row",
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
     backgroundColor: 'black'
     ,
     flexWrap: "wrap",
     display: 'flex'
    }}>
     <ScrollView>
      <View style={{
       backgroundColor: 'white',
       flexDirection: "row",
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').height,
       backgroundColor: 'black'
       ,
       flexWrap: "wrap",
       display: 'flex'
      }}>




       <View style={{
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 4,
        backgroundColor: '#F0F0F0',
        borderColor: 'white',
        borderWidth: 2
       }}>
        <View style={{
         width: '100%',
         height: '80%',
         backgroundColor: 'blue'
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
         <Text style={{
          fontFamily: 'Rn',
          fontSize: 13,
          marginLeft: 10
         }}>
          스페인 22 홈 저지
         </Text>
         <Text style={{
          //fontFamily: 'Rn',
          fontSize: 9,
          marginLeft: 10,
          color: '#808080'

         }}>
          남성 • Football
         </Text>

        </View>
        <View>

        </View>

       </View>

       <View style={{
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 4,
        backgroundColor: '#F0F0F0',
        borderColor: 'white',
        borderWidth: 2
       }}>
        <View style={{
         width: '100%',
         height: '80%',
         backgroundColor: 'blue'
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
         <Text style={{
          fontFamily: 'Rn',
          fontSize: 13,
          marginLeft: 10
         }}>
          스페인 22 홈 저지
         </Text>
         <Text style={{
          //fontFamily: 'Rn',
          fontSize: 9,
          marginLeft: 10,
          color: '#808080'

         }}>
          남성 • Football
         </Text>

        </View>
        <View>

        </View>

       </View>
      </View>
     </ScrollView>

    </View>

   </View>






  </View >
 )

}
Ca_in.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}> Original </Text>,

 };
};
export default Ca_in;

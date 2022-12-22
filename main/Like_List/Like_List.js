

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

const Like_List = function ({ navigation }) {

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
         source={require('./28.png')}
        />
       </View>
       <View style={{
        width: '60%',
        height: '100%',
        //backgroundColor: 'pink',
        flexDirection: 'column'
       }}>
        <Feather style={{
         position: 'absolute',
         bottom: 5,
         right: 10
        }} name="x" size={20} color="black" />
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
           alignItems: 'flex-end'
          }
         }>
          <AntDesign style={{
           marginRight: 5
          }} name="caretdown" size={15} color="black" />
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
          }}> 18900원</Text>

         </View>
        </View>
       </View>
      </View>
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

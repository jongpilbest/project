

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"


import { Feather } from '@expo/vector-icons';
//import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const fifth = function ({ navigation }) {
 const xx = Dimensions.get('window').width;
 const [checkfirst, setfirst] = useState(5);
 const [checksecond, setsecond] = useState(0);
 const [count, setcount] = useState(0);

 const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
 const autoScroll = function () {
  //console.log(contentVerticalOffset, xx * 0.8, xx * 0.8 * 0.2)
  setcount(contentVerticalOffset / 4.5)
 }

 //console.log(contentVerticalOffset, Dimensions.get('window').height)
 return (

  <View style={{
   backgroundColor: 'white',
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,


  }}>
   <View style={{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.5,
    position: 'relative',
    //backgroundColor: 'yellow',
    overflow: 'hidden'
    ,

   }}>

    <View style={{
     width: '80%',
     height: 5,
     backgroundColor: 'white',
     position: 'absolute',
     bottom: 10,
     zIndex: 2,
     alignSelf: 'center',
    }}>
     <View style={{

      width: '20%',
      height: '100%',
      backgroundColor: 'black',
      position: 'absolute',
      left: count

     }}>

     </View>

    </View>


    <ScrollView
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     onScroll={event => {
      setContentVerticalOffset(event.nativeEvent.contentOffset.x);

      autoScroll();

     }}
    >
     <View style={{

      width: Dimensions.get('window').width * 4,
      height: '100%',
      backgroundColor: 'white',
      flexDirection: 'row'

     }}>
      <View style={{
       width: Dimensions.get('window').width,
       height: '100%',
       backgroundColor: 'blue',
       zIndex: 1,
       flex: 1,
      }}>
       <Image

        //resizeMode="cover"
        style={{
         width: Dimensions.get('window').width,
         height: '100%'

        }}
        source={require('../assets/Image/10.png')}
       />

      </View>
      <View style={{
       width: Dimensions.get('window').width,
       flex: 1,
       backgroundColor: 'blue',
       zIndex: 1,
      }}>
       <Image

        //resizeMode="cover"
        style={{
         width: Dimensions.get('window').width,
         height: '100%'

        }}
        source={require('../assets/Image/11.png')}
       />

      </View>
      <View style={{
       width: Dimensions.get('window').width,
       flex: 1,
       backgroundColor: 'blue',
       zIndex: 1,
      }}>
       <Image

        //resizeMode="cover"
        style={{
         width: Dimensions.get('window').width,
         height: '100%'

        }}
        source={require('../assets/Image/12.png')}
       />

      </View>
      <View style={{
       width: Dimensions.get('window').width,
       flex: 1,
       zIndex: 1,
      }}>
       <Image

        //resizeMode="cover"
        style={{
         width: Dimensions.get('window').width,
         height: '100%'
        }}
        source={require('../assets/Image/15.png')}
       />

      </View>
     </View>


    </ScrollView>
   </View>



   <ScrollView>
    <View style={{
     width: '100%',
     height: Dimensions.get('window').height / 1.5,
     //backgroundColor: 'yellow'
    }}>

     <View style={{
      width: '100%',
      height: Dimensions.get('window').height / 7,

      // backgroundColor: 'pink',
      borderBottomColor: '#E3E3E3',
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent'
     }}>
      <Text style={{
       fontFamily: 'Rn',
       fontSize: 22,
       marginLeft: 10,
       marginTop: 10
      }}>
       NMD V3
      </Text>
      <Text style={{
       fontFamily: 'Rn',
       fontSize: 13,
       marginLeft: 10,
       color: '#808080'
      }}>
       Women • Originals
      </Text>
      <Text style={{
       fontFamily: 'Rn',
       fontSize: 20,
       marginLeft: 10
      }}>
       189,000원
      </Text>
     </View>
     <View style={{
      width: '100%',
      height: Dimensions.get('window').height / 7,

      backgroundColor: 'white',
      borderBottomColor: '#E3E3E3',
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent'
     }}>
      <Text style={{
       fontFamily: 'Rn',
       fontSize: 22,
       marginLeft: 10,
       marginTop: 10
      }}>
       Size
      </Text>
      <ScrollView
       showsHorizontalScrollIndicator={false}
       style={{
        marginLeft: 10
       }}
       horizontal={true}>

       <View style={{
        width: 70,
        height: 30,
        backgroundColor: 'white',
        display: 'flex',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10

       }}>
        <Text style={{
         color: 'black',
         fontFamily: 'Rn',
         fontSize: 15,
         textAlign: 'center',
         fontWeight: 'bold',
         //backgroundColor: 'blue'
        }}> 230</Text>

       </View>
       <View style={{
        width: 70,
        height: 30,
        backgroundColor: 'white',
        display: 'flex',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10
       }}>
        <Text style={{
         color: 'black',
         fontFamily: 'Rn',
         fontSize: 15,
         textAlign: 'center',
         fontWeight: 'bold',
         //backgroundColor: 'blue'
        }}> 230</Text>

       </View>
       <View style={{
        width: 70,
        height: 30,
        backgroundColor: 'white',
        display: 'flex',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10

       }}>
        <Text style={{
         color: 'black',
         fontFamily: 'Rn',
         fontSize: 15,
         textAlign: 'center',
         fontWeight: 'bold',
         //backgroundColor: 'blue'
        }}> 230</Text>

       </View>
       <View style={{
        width: 70,
        height: 30,
        backgroundColor: 'white',
        display: 'flex',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10

       }}>
        <Text style={{
         color: 'black',
         fontFamily: 'Rn',
         fontSize: 15,
         textAlign: 'center',
         fontWeight: 'bold',
         //backgroundColor: 'blue'
        }}> 230</Text>

       </View>
      </ScrollView>
     </View>
     <View style={{
      width: '100%',
      height: Dimensions.get('window').height / 12,

      backgroundColor: 'white',
      borderBottomColor: '#E3E3E3',
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between'
     }}>

      <Text style={{
       color: 'black',
       fontFamily: 'Rn',
       fontSize: 20,
       //textAlign: 'center',
       fontWeight: 'bold',
       marginLeft: 10,
       marginTop: 10
      }}>
       정보
      </Text>
      <AntDesign
       style={{
        margin: 10
       }}
       name="down" size={24} color="black" />
     </View>
     <View style={{
      width: '100%',
      height: Dimensions.get('window').height / 12,

      backgroundColor: 'white',
      borderBottomColor: '#E3E3E3',
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between'
     }}>

      <Text style={{
       color: 'black',
       fontFamily: 'Rn',
       fontSize: 20,
       //textAlign: 'center',
       fontWeight: 'bold',
       marginLeft: 10,
       marginTop: 10
      }}>
       리뷰
      </Text>
      <AntDesign
       style={{
        margin: 10
       }}
       name="down" size={24} color="black" />
     </View>
     <View style={{
      width: '100%',
      height: Dimensions.get('window').height / 14,
      //backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'space-between'
     }} >
      <View style={{
       width: '40%',
       height: '70%',
       backgroundColor: 'black',
       marginLeft: 10,
       marginTop: 10,
       justifyContent: 'center'
      }}>
       <Text style={{
        color: 'white',
        fontSize: 17,
        fontFamily: 'Rn',
    
        textAlign: 'center'
       }}>
        구매하기
       </Text>

      </View>
      <View style={{
       width: '40%',
       height: '70%',
       backgroundColor: 'white',
       marginRight: 10,
       justifyContent: 'center',
       borderColor: 'black',
       borderWidth: 1,
       marginTop: 10,
      }}>
       <Text style={{
        color: 'black',
        fontSize: 17,
        fontFamily: 'Rn',
  
        textAlign: 'center'
       }}>
        장바구니
       </Text>

      </View>
     </View>


    </View>
   </ScrollView >


  </View >
 )

}
fifth.navigationOptions = ({ navigation }) => {
 return {

  title: '',
  headerRight: () => {

   return <View style={{
    flexDirection: 'row'
   }}>
    <Feather
     style={{
      margin: 10
     }}
     name="search" size={24} color="black" />
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>

     <Feather style={{
      margin: 10
     }} name="shopping-cart" size={24} color="black" />
    </TouchableOpacity>


   </View>




  }


 };
};
export default fifth;

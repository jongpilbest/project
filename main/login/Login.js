import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import { HeaderTitle } from "react-navigation-stack";
import { cos } from "react-native-reanimated";

const Login = function ({ navigation, state }) {
 const [title, setTitle] = useState(false);
 const [title2, setTitle2] = useState(false);
 console.log(navigation, state)
 return (
  <View style={{
   backgroundColor: 'white',
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,


  }}>
   <View style={{
    width: '100%',
    flex: 1,
    // backgroundColor: 'blue'
   }}>
    <View style={{
     width: '100%',
     flex: 0.2,
     backgroundColor: 'white'
    }}>

    </View>
    <View style={{
     width: '100%',
     flex: 1,
     //backgroundColor: 'pink'
    }}>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10
     }}> 이메일 주소 </Text>
     <TextInput
      style={{
       width: '90%',
       margin: 15,
       fontSize: 26,
       backgroundColor: 'white',
       height: 40,
       borderBottomColor: 'black',
       borderTopColor: 'transparent',
       borderRightColor: 'transparent',
       borderLeftColor: 'transparent',
       borderWidth: 1
      }}
      value={title}
      onChangeText={(text) => setTitle(text)}
      autoCorrect
     //onEndEditing={() => console.log("onEndEditing")}
     //onSubmitEditing={() => console.log("onSubmitEditing")}
     />
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10
     }}> 비밀번호 </Text>
     <TextInput
      style={{
       width: '90%',
       margin: 15,
       fontSize: 26,
       backgroundColor: 'white',
       height: 40,
       borderBottomColor: 'black',
       borderTopColor: 'transparent',
       borderRightColor: 'transparent',
       borderLeftColor: 'transparent',
       borderWidth: 1
      }}
      value={title2}
      onChangeText={(text) => setTitle2(text)}
      autoCorrect
     //onEndEditing={() => console.log("onEndEditing")}
     //onSubmitEditing={() => console.log("onSubmitEditing")}
     />
     <View style={{
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'flex-end'

     }}>
      <Text style={{
       fontFamily: 'Rn',
       margin: 10,
       fontSize: 13
      }}>
       이메일 찾기
      </Text>
      <Text style={{
       fontFamily: 'Rn',
       margin: 10,
       fontSize: 13
      }}>
       비밀번호 찾기
      </Text>
     </View>

    </View>


   </View>
   <View style={{
    width: '100%',
    flex: 1,

    alignItems: 'center',
    display: 'flex'
   }}>



    <View style={{
     width: '90%',
     backgroundColor: 'black',
     height: 50,
     justifyContent: 'center',


    }}>
     <Text style={{
      fontFamily: 'Rn',
      color: 'white',
      fontSize: 17,
      textAlign: 'center'
     }}>
      로그인
     </Text>

    </View>
    <View style={{
     width: '90%',
     backgroundColor: 'white',
     height: 50,
     justifyContent: 'center',
     borderColor: 'black',
     borderWidth: 1
     , marginTop: 20

    }}>
     <Text style={{
      fontFamily: 'Rn',
      color: 'black',
      fontSize: 17,
      textAlign: 'center'
     }}>
      회원가입
     </Text>

    </View>
   </View>
  </View >
 )

}

Login.navigationOptions = () => {
 return {

  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}> Login </Text>,
 
 };
};
export default Login;

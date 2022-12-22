import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import { HeaderTitle } from "react-navigation-stack";
import { cos } from "react-native-reanimated";

const New_ = function ({ navigation, state }) {
 const [title, setTitle] = useState(false);
 const [title2, setTitle2] = useState(false);
 const [title3, setTitle3] = useState(false);
 const [title4, setTitle4] = useState(false);

 const [count, setcount] = useState(0);

 console.log(navigation, state);
 const check_icon = function () {
  if (count == 0) {
   setcount(1);
  }
  else if (count == 1) {
   setcount(0)
  }
 }
 return (
  <View style={{
   backgroundColor: 'white',
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,


  }}>
   <View style={{
    width: '100%',
    flex: 2,
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
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 10
     }}> 회원이름 </Text>
     <TextInput
      style={{
       width: '90%',
       margin: 13,
       fontSize: 26,
       backgroundColor: 'white',
       height: 40,
       borderBottomColor: 'black',
       borderTopColor: 'transparent',
       borderRightColor: 'transparent',
       borderLeftColor: 'transparent',
       borderWidth: 0.9
      }}
      value={title}
      onChangeText={(text) => setTitle(text)}
      autoCorrect
     //onEndEditing={() => console.log("onEndEditing")}
     //onSubmitEditing={() => console.log("onSubmitEditing")}
     />
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 10
     }}> 이메일주소 </Text>
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
       borderWidth: 0.9

      }}
      value={title2}
      onChangeText={(text) => setTitle2(text)}
      autoCorrect
     //onEndEditing={() => console.log("onEndEditing")}
     //onSubmitEditing={() => console.log("onSubmitEditing")}
     />
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 15,
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
       borderWidth: 0.9
      }}
      value={title2}
      onChangeText={(text) => setTitle2(text)}
      autoCorrect
     //onEndEditing={() => console.log("onEndEditing")}
     //onSubmitEditing={() => console.log("onSubmitEditing")}
     />
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 10
     }}> 비밀번호 재확인 </Text>
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
       borderWidth: 0.9
      }}
      value={title2}
      onChangeText={(text) => setTitle2(text)}
      autoCorrect
     //onEndEditing={() => console.log("onEndEditing")}
     //onSubmitEditing={() => console.log("onSubmitEditing")}
     />



    </View>

    <View style={{
     width: '100%',
     flex: 1,
     //backgroundColor: 'pink',
     alignItems: 'center',
     display: 'flex'
    }}>

     <View style={{
      flexDirection: 'row',
      width: '90%',
      height: 40,
      //backgroundColor: 'yellow',
      margin: 10,
      alignItems: 'center',
      display: 'flex'

     }}>
      <TouchableOpacity onPress={() =>
       check_icon()
      }>
       {
        count == 0 && <AntDesign
         style={{
          margin: 5
         }}
         name="checkcircleo" size={24} color="black" />
       }
       {
        count == 1 && <AntDesign style={{
         margin: 5
        }} size={24} name="checkcircle" color="black" />
       }

      </TouchableOpacity>
      <Text style={{
       fontFamily: 'Rn',
       fontSize: 13
      }}> [필수] 서비스 이용약관 </Text>
     </View>


     <View style={{
      width: '90%',
      backgroundColor: 'black',
      height: 40,
      justifyContent: 'center',
      marginTop: 20


     }}>
      <TouchableOpacity onPress={() => navigation.navigate('My_page')}>
       <Text style={{
        fontFamily: 'Rn',
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
       }}>
        가입완료
       </Text>
      </TouchableOpacity>
     </View>
    </View>





   </View>
  </View >
 )

}

New_.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}> </Text>,

 };
};
export default New_;

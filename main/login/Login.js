import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { tokenAction } from "../../redux/token";
const Login = function ({ navigation, state }) {
 const [title, setTitle] = useState(false);
 const [title2, setTitle2] = useState(false);
 const [error, sererror] = useState(0);
 const dispatch = useDispatch();
 const token = useSelector((state) => state.token.token);
 console.log(token)
 const My_oo = function () {




 }
 return (
  <View style={{
   backgroundColor: 'white',
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,


  }}>
   {
    token == '' &&

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
         borderWidth: 0.9
        }}
        value={title}

        onChangeText={(text) => {

         sererror(0);

         setTitle(text)
        }}
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
         borderWidth: 0.9
        }}

        value={title2}
        onChangeText={(text) => {
         sererror(0)
         setTitle2(text)
        }}
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
       <View>
        {error != 0 &&
         <Text style={{
          fontFamily: 'Rn',
          margin: 10,
          fontSize: 15,
          color: 'red'
         }}>
          {error}
         </Text>
        }

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
       <TouchableOpacity onPress={() => {
        axios.post('http://192.168.1.104:3000/signin', {
         "email": title,
         "password": title2

        }, { withCredentials: true })
         //성공시 then 실행
         .then(function (response) {

          console.log(response.data.user);

          dispatch(tokenAction.settoken(response.data.token))
          var change = [...response.data.user];
          console.log(change)
          var aa = [];
          change.map((el, index) => {
           el.size.map((ev, index) => {
            var new_item = {
             productId: el,
             size: {
              size: ev.size,
              quantity: ev.quantity
             }

            }
            aa.push(new_item)
           })
          })

          //console.log(response.data.user_info, '아이디');
          dispatch(tokenAction.setname(response.data.user_info))
          dispatch(tokenAction.setuser(aa))

          // navigation.navigate('My_page', { user: response.data.user });
         }).catch(function (error) {
          //console.log(error)
          sererror(error.response.data.error);

         });


        // navigation.navigate('My_page')}
       }

       }
       >
        <Text style={{
         fontFamily: 'Rn',
         color: 'white',
         fontSize: 17,
         textAlign: 'center'
        }}>
         로그인
        </Text>
       </TouchableOpacity>
      </View>

      <View style={{
       width: '90%',
       backgroundColor: 'white',
       height: 50,
       justifyContent: 'center',
       borderColor: 'black',
       borderWidth: 0.9
       , marginTop: 20

      }}>
       <TouchableOpacity onPress={() => navigation.navigate('New_')}>

        <Text style={{
         fontFamily: 'Rn',
         color: 'black',
         fontSize: 17,
         textAlign: 'center'
        }}>
         회원가입
        </Text>
       </TouchableOpacity>

      </View>
     </View>
    </View>
   }
   {
    token && navigation.navigate('My_page')
   }

  </View >
 )

}

Login.navigationOptions = () => {
 return {

  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}>  </Text>,

 };
};
export default Login;
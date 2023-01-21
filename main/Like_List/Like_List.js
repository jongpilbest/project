

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import Lii_Com from "./Lii_Com";
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { tokenAction } from "../../redux/token";
const Like_List = function ({ navigation }) {
  const token = useSelector((state) => state.token.token);
  const cart = useSelector((state) => state.token.cart);
  const price_total = useSelector((state) => state.token.cart_price);
  const dispatch = useDispatch();
  const [price, setprice] = useState(0);

  const [like, setlike] = useState([]);
  const go_del = function (data, size) {
    axios.post('http://192.168.1.105:3000/delete_Cart', {
      id: data,
      size: size
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      //성공시 then 실행
      .then(function (response) {
        var change = [...response.data.item];

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
        console.log(aa);
        //setgood(aa);
        dispatch(tokenAction.setuser(aa))

      }).catch(function (error) {

        console.log(error.response.data);
      });


  }
  useEffect(() => {
    console.log('카트변화?', price_total);
    setprice(price_total)
    setlike(cart);
  }), [cart];


  return (

    <View style={{
      backgroundColor: 'white',
      marginRight: 10,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      borderRadius: 5,



    }}>






      <View style={{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.76,
        display: 'flex',
        alignItems: 'center',

      }}>

        <View style={{
          width: '90%',
          backgroundColor: 'white',
          height: 50,

          //  backgroundColor: 'black'


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
        <ScrollView>
          <View style={{
            backgroundColor: 'white',
            flexDirection: "row",
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 5,
            //backgroundColor: 'pink'


            //flexWrap: "wrap",
            display: 'flex'
          }}>

            <View style={{
              width: '100%',
              height: '100%'
            }}>
              {

                like.map((el, inex) => {
                  return <Lii_Com key={inex}
                    count_price={(fir, second) => countt(fir, second)}
                    gogo_delte={(data, size) => go_del(data, size)}
                    data={el}></Lii_Com>
                })
              }
            </View>


          </View>
        </ScrollView>
      </View >
      <View style={{
        width: Dimensions.get('window').width,
        backgroundColor: '#F0F0F0',
        height: Dimensions.get('window').height / 9,


      }}>
        <View style={{

          flexDirection: 'row',
          display: 'flex',
          height: '50%',
          alignItems: 'center',

          alignSelf: 'center',

        }}>
          <View style={{
            width: '90%',
            flexDirection: 'row'
            , alignContent: 'center',
            justifyContent: 'space-between',
          }}>
            <Text style={{
              fontFamily: 'Rn',

              fontSize: 15
            }}> 총 주문 금액</Text>
            <Text style={{
              fontFamily: 'Rn',

              fontSize: 15
            }}>{price}</Text>

          </View>



        </View>
        <View style={{

          flexDirection: 'row',
          display: 'flex',
          height: '50%',
          backgroundColor: 'black',
          width: '100%',


        }}>


          <View style={{

            marginRight: 'auto',
            marginLeft: 'auto',
            height: '100%',
            alignSelf: 'center',
            width: '90%',
            backgroundColor: 'black',

            display: 'flex',
            flexDirection: 'row'
            , justifyContent: 'space-between',

          }}>

            <Text style={{
              fontFamily: 'Rn',
              marginTop: 'auto',
              marginBottom: 'auto',
              fontSize: 15,
              color: 'white'
            }}>
              결제 하기
            </Text>


            <AntDesign
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
              name="arrowright" size={24} color="white" />
          </View>

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
    }}> 장바구니 </Text>,

  };
};
export default Like_List;
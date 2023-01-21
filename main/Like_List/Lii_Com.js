

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { tokenAction } from "../../redux/token";
const Lii_Com = function ({ data, gogo_delte, count_price }) {
  const [opacity, setopcacity] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.post(`http://192.168.1.105:3000/Cart_quantity/${data.productId.productId._id}`, {
      size: data.size.size
    })
      //성공시 then 실행
      .then(function (response) {
        console.log(response.data);
        setopcacity(response.data.data);
        if (response.data.data == 0) {
          console.log('존재하다')
          dispatch(tokenAction.setprice(data.productId.productId.price * data.size.quantity))
        }
        else {
          console.log('비존재하다')
          dispatch(tokenAction.setminusprice(data.productId.productId.price * data.size.quantity))
        }
      }).catch(function (error) {
        console.log(error.data);
      });



  }, [])


  const coco_text = function () {
    if (data.productId.productId.product_name.length > 11) {

      return data.productId.productId.product_name.substr(0, 10) + "..."
    }
    else {
      return data.productId.productId.product_name
    }


  }


  const gogo_opactuy = function () {
    return 1 - opacity;
  }
  return (
    <View>

      <View style={{
        width: '90%',
        height: Dimensions.get('window').height / 5,
        backgroundColor: '#F0F0F0',
        margin: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        opacity: gogo_opactuy()
      }}>

        <View style={{
          width: '40%',
          height: '100%',

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
          flexDirection: 'column',
          position: 'relative'
        }}>



          <Text style={{
            fontFamily: 'Rn',
            fontSize: 14,
            marginLeft: 10,
            marginTop: 10
          }}> {coco_text()}</Text>
          <Text style={{
            fontFamily: 'Rn',
            color: '#808080',
            fontSize: 11,
            marginLeft: 10
          }}>
            {data.productId.productId.sebucategori.toString().replace(',', '*')}
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
                <Text style={{
                  textAlign: 'right'
                }}>
                  {data.size.size}
                </Text>
              </View>
              <View>

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
          <View style={{
            width: '90%',
            //backgroundColor: 'white',
            margin: 5,
            display: 'flex',


          }}>
            <View style={{
              width: '15%',
              // backgroundColor: 'pink',
              alignSelf: 'flex-end',

            }}>
              <TouchableOpacity onPress={() => {

                //->여기서 부터 axios 쿼리 불러와서 지우기..^^:;
                if (opacity == 0) {
                  console.log(data.productId.productId.price * data.size.quantity, '여기마이너스')
                  dispatch(tokenAction.setminusprice(data.productId.productId.price * data.size.quantity))
                }
                setopcacity(0);
                gogo_delte(data.productId.productId._id, data.size.size);
              }}>

                <Feather style={{

                }} name="x" size={22} color="black" />

              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </View >
  )

}


export default Lii_Com;

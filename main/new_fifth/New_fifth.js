

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import Size_Com from "../Size_Com";
import { ScrollView } from "react-native-gesture-handler";
import New_Coms from "./New_Coms";
const New_fifth = function ({ navigation, data }) {
  const [football, setfootball] = useState([]);
  const size = ["230", "250", "260", "270", "280"];

  const getmain_football = function () {
    axios.get('http://192.168.1.105:3000/fifa', {
    })
      //성공시 then 실행
      .then(function (response) {
        setfootball(response.data[0].product_image)
        //  setfootball(response.data[0]);

      }).catch(function (error) {

        console.log(error.response.data);
      });

  }


  useEffect(() => {
    getmain_football();

  }, [])

  return (

    <View style={{
      width: Dimensions.get('window').width,
      //backgroundColor: '#F0F0F0',
      borderColor: 'white',
      borderWidth: 2,
      // height: Dimensions.get('window').height * 2,

    }}>

      <ScrollView>

        <View style={{
          width: '100%',
          height: Dimensions.get('window').height * 0.71,
          backgroundColor: 'white',

        }}>

          <ScrollView
            nestedScrollEnabled={true}>

            {

              football.map((el, index) => {
                return <New_Coms
                  data={el}
                  navigation={navigation}
                  key={index}></New_Coms>
              })
            }

          </ScrollView>


        </View>
        <View style={{
          height: Dimensions.get('window').height * 0.35,


          width: Dimensions.get('window').width,
          backgroundColor: 'white',
          // backgroundColor: 'yellow'
        }}>
          <View style={{
            width: '100%',
            height: Dimensions.get('window').height * 0.15,
            position: 'relative',
            backgroundColor: 'white'


          }}>
            <AntDesign
              style={{
                position: 'absolute',
                top: 5,
                zIndex: 2,
                right: 15
              }}
              name="hearto" size={25} color="black" />
            <View style={{
              width: '100%',
              height: '33%'
              ,
              display: 'flex',
              justifyContent: 'center',

            }}>
              <View>
                <Text style={{
                  fontFamily: 'Rn',
                  fontSize: 15,
                  marginLeft: 10
                }}>
                  울트라부스트 DNA XXII
                </Text>
              </View>
            </View>
            <View style={{
              width: '100%',
              height: '33%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 15,
                marginLeft: 10
              }}>
                이프스타일 러닝 스포츠웨어 캡슐 컬렉션
              </Text>
            </View>
            <View style={{
              width: '100%',
              height: '33%',
            }}>
              <View style={{
                width: Dimensions.get('window').width * 0.3,
                height: '80%',
                backgroundColor: 'black',
                marginLeft: 10,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontFamily: 'Rn',
                  fontSize: 15,

                  color: 'white',
                  textAlign: 'center'
                }}>
                  ₩18000
                </Text>

              </View>

            </View>

          </View>


          <View style={{
            width: '100%',


            display: 'flex',
            justifyContent: 'center',

          }}>
            <View>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 15,
                marginLeft: 10,
                marginTop: 10
              }}>
                사이즈
              </Text>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                  marginLeft: 10
                }}
                horizontal={true}>



                {
                  size.map((el, index) => {
                    return <Size_Com
                      size={size}
                      goto_size={(data) => fifth_desig(data)} key={index} data={el}>
                    </Size_Com>
                  })

                }

              </ScrollView>
            </View>

          </View>
          <View style={{
            width: '100%',
            backgroundColor: 'black',
            marginTop: 20,
            height: '14%',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
          }}>
            <View style={{
              width: '50%',
              height: '100%',
              backgroundColor: 'black',

              display: 'flex',

            }}>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 13,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                color: 'white'
              }}>
                구매하기
              </Text>

            </View>
            <View style={{
              width: '50%',
              height: '100%',
              backgroundColor: 'white'
            }}>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 13,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}>
                장바구니
              </Text>

            </View>
            <View>

            </View>

          </View>

        </View>

      </ScrollView >
    </View >



  )

}


export default New_fifth;

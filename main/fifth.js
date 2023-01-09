

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { useSelector, useDispatch } from 'react-redux'

//import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { tokenAction } from '../redux/token'
import Size_Com from "./Size_Com";
import axios from "axios";


const fifth = function ({ navigation }) {
  const dispatch = useDispatch();
  const data = navigation.getParam('total');
  //data에서 이름 , 카테고리 , 가격 , 사이즈  보내면됨
  const token = useSelector((state) => state.token.token);
  const [checkfirst, setfirst] = useState(5);
  const [checksecond, setsecond] = useState(0);
  const [count, setcount] = useState(0);
  const [size, setsize] = useState(0);
  const [good, setgood] = useState([]);

  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const autoScroll = function () {


    //console.log(contentVerticalOffset, xx * 0.8, xx * 0.8 * 0.2)
    setcount(contentVerticalOffset / 4.5)
  }
  const fifth_desig = function (data) {


    setsize(data);

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
              //backgroundColor: 'blue',
              zIndex: 1,
              flex: 1,
            }}>
              <Image

                //resizeMode="cover"
                style={{
                  width: Dimensions.get('window').width,
                  height: '100%'

                }}
                source={{ uri: data.product_image[0] }}
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
                source={{ uri: data.product_image[1] }}
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
                source={{ uri: data.product_image[2] }}
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
                source={{ uri: data.product_image[3] }}
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
              {data.product_name}
            </Text>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 13,
              marginLeft: 10,
              color: '#808080'
            }}>
              {data.sebucategori.toString().replace(',', '*')}
            </Text>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 20,
              marginLeft: 10
            }}>
              {`₩ ${data.price}원`}
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
              {
                data.size.map((el, index) => {
                  return <Size_Com
                    size={size}
                    goto_size={(data) => fifth_desig(data)} key={index} data={el}>
                  </Size_Com>
                })

              }
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
              <TouchableOpacity onPress={() => {
                axios.post('http://192.168.1.102:3000/cart', {
                  "_id": data._id,
                  "size": size
                },
                  {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  }

                )
                  //성공시 then 실행
                  .then(function (response) {
                    var change = [...response.data.item];
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
                    console.log(aa);
                    //setgood(aa);
                    dispatch(tokenAction.setuser(aa))
                    // console.log('??', response.data)

                  }).catch(function (error) {


                  });
              }}>


                <Text style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: 'Rn',

                  textAlign: 'center'
                }}>
                  장바구니
                </Text>
              </TouchableOpacity>
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



  };
};
export default fifth;

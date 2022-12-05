

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Maii from "./Maii"
import Owner from "./Owner";
import Categori from "./Categori";
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Main_text from "./Main_text";
import { HeaderTitle } from "react-navigation-stack";

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 30, marginLeft: 10 }}
      source={require('../assets/logo.png')}
    />
  );
}
const main = function ({ navigation }) {
  const [ref, setRef] = useState(null);

  // const listRef_2 = useRef(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  var hee = Dimensions.get('window').height;
  const [count, setcount] = useState(2);
  console.log(count, '카운트세기')
  const autoScroll = function () {
    console.log(contentVerticalOffset, hee)
    if (contentVerticalOffset > 30 && contentVerticalOffset < 100) {
      ref.scrollTo({ x: 0, y: hee, animated: false })
      //setcount(2);
      console.log(count)
    }
    if (contentVerticalOffset < hee && contentVerticalOffset > hee / 2) {
      console.log('??')
      ref.scrollTo({ x: 0, y: 0, animated: false })
      //setcount(1);
    }

  }
  //console.log(contentVerticalOffset, Dimensions.get('window').height)
  return (

    <View style={{
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,


    }}>
      <ScrollView
        ref={(ref) => {
          setRef(ref);
        }}
        onScroll={event => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);

          autoScroll();

        }}
      >


        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          backgroundColor: 'blue',

        }}>
          <Image

            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%'

            }}
            source={require('../assets/Image_2/1.png')}
          />

          <View style={{
            backgroundColor: 'black',
            width: 110,
            height: 35
            , position: 'absolute',
            top: '70%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              wordcup
            </Text>
          </View>
          <View style={{
            backgroundColor: 'black',
            width: 160,
            height: 35
            , position: 'absolute',
            top: '81%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              premium shoes
            </Text>
          </View>
        </View>
        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          //backgroundColor: 'pink',
          flex: 1
        }}>

          <View style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              fontSize: 25,
              marginLeft: 10,
              //backgroundColor: 'blue'
            }}>
              FIFA Word Cup
            </Text>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 13,
              marginLeft: 10,
              marginTop: 0
            }}>
              피파 월드컵
            </Text>

          </View>
          <View style={{
            width: '100%',
            flex: 4
          }}>


            <ScrollView
              showsHorizontalScrollIndicator={false}

              horizontal={true}>

              <View style={{
                width: Dimensions.get('window').width * 2,
                height: '100%',
                flexDirection: 'row',
                marginLeft: 5,
                backgroundColor: 'white'
              }}>
                <View style={{
                  width: Dimensions.get('window').width / 2.3,
                  height: '62%',
                  backgroundColor: '#F0F0F0',
                  margin: 5
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
                  width: Dimensions.get('window').width / 2.3,
                  height: '60%',
                  backgroundColor: '#F0F0F0',
                  margin: 5
                }}>

                </View>
                <View style={{
                  width: Dimensions.get('window').width / 3,
                  height: '60%',
                  backgroundColor: 'black'
                }}>

                </View>
                <View style={{
                  width: Dimensions.get('window').width / 3,
                  height: '60%',
                  backgroundColor: 'black'
                }}>

                </View>
              </View>


            </ScrollView>

          </View>


        </View >

        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          backgroundColor: 'blue',
          flex: 1
        }}>
          <Image

            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%'

            }}
            source={require('../assets/Image_2/4.png')}
          />

          <View style={{
            backgroundColor: 'black',
            width: 110,
            height: 35
            , position: 'absolute',
            top: '70%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              This is
            </Text>
          </View>
          <View style={{
            backgroundColor: 'black',
            width: 160,
            height: 35
            , position: 'absolute',
            top: '81%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              Your Season
            </Text>
          </View>
        </View>
        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          //backgroundColor: 'pink',
          flex: 1
        }}>

          <View style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              fontSize: 25,
              marginLeft: 10,
              //backgroundColor: 'blue'
            }}>
              Winter season
            </Text>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 13,
              marginLeft: 10,
              marginTop: 0
            }}>
              겨울 시즌
            </Text>

          </View>
          <View style={{
            width: '100%',
            flex: 4
          }}>


            <ScrollView
              showsHorizontalScrollIndicator={false}

              horizontal={true}>

              <View style={{
                width: Dimensions.get('window').width * 2,
                height: '100%',
                flexDirection: 'row',
                marginLeft: 5,
                backgroundColor: 'white'
              }}>
                <View style={{
                  width: Dimensions.get('window').width / 2.3,
                  height: '60%',
                  backgroundColor: 'black',
                  margin: 5
                }}>

                </View>
                <View style={{
                  width: Dimensions.get('window').width / 2.3,
                  height: '60%',
                  backgroundColor: 'black',
                  margin: 5
                }}>

                </View>
                <View style={{
                  width: Dimensions.get('window').width / 3,
                  height: '60%',
                  backgroundColor: 'black'
                }}>

                </View>
                <View style={{
                  width: Dimensions.get('window').width / 3,
                  height: '60%',
                  backgroundColor: 'black'
                }}>

                </View>
              </View>


            </ScrollView>

          </View>


        </View>

      </ScrollView >
    </View >
  )

}
main.navigationOptions = () => {
  return {
    headerLeft: (props) => <LogoTitle {...props} />,
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
        <Feather style={{
          margin: 10
        }} name="user" size={24} color="black" />
      </View>




    }


  };
};
export default main;


import { AntDesign } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import main from './main/main';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "react-navigation-stack";
//import { Provider } from "react-redux";
import { Foundation } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import second from './main/second';
import good_js from './main/good_js';
import Ca_in from './main/Ca_in';
import Categori from './main/Categori';
import Top_bo from './main/Top_bo';
import fifth from './main/fifth';
import Top_kid from './main/Top_kid';
import { Feather } from '@expo/vector-icons';
import Top_men from './main/Top_men';
import { Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 30, marginLeft: 10 }}
      source={require('./assets/logo.png')}
    />
  );
}
import Login from './main/login/Login';
const navigator =
  createSwitchNavigator({

    botton: createBottomTabNavigator({
      mainn: createStackNavigator({
        main: main,
        Login: Login,
        fifth: fifth,
      },
        {
          navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: ({ tintColor }) => (
              <Feather name="home" size={24} color="black" />

            ),
            activeColor: '#404040',
            inactiveColor: '#404040',
            barStyle: { backgroundColor: '#545252' },
          }
        })
      ,

      second: createStackNavigator({
        Top_bo: Top_bo,
        Login: Login,
        Top_men: Top_men,
        Top_kid: Top_kid,
        Categori: Categori,
        Ca_in: Ca_in
      }, {
        navigationOptions: {
          tabBarLabel: () => { return null },
          tabBarIcon: ({ tintColor }) => (
            <Feather name="search" size={24} color="black" />
          ),
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#545252' },
        }
      }),
      cart: createStackNavigator({

        good_js: good_js,

      }, {
        navigationOptions: {
          tabBarLabel: () => { return null },
          tabBarIcon: ({ tintColor }) => (

            <Feather name="heart" size={24} color="black" />


          ),
          unmountOnBlur: true,
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#545252' },

        },

      }, {

        shifting: true,
      }),

      Mypage_main: createStackNavigator({

        fifth: fifth,

      }, {
        navigationOptions: {
          tabBarLabel: () => { return null },
          tabBarIcon: ({ tintColor }) => (

            <Feather name="shopping-cart" size={24} color="black" />


          ),
          unmountOnBlur: true,
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#545252' },
        },

      }, {

        shifting: true,
      })



    }, {

      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#ffffff',
        },
      },
    },)


  })





const App = createAppContainer(navigator);
export default () => {
  //console.disableYellowBox = true;


  const [fontsLoading] =
    useFonts({

      'Bold': require('./assets/Changa-Bold.ttf'),
      'ExtraBold': require('./assets/Changa-ExtraBold.ttf'),
      'Rn': require('./assets/Changa-Regular.ttf')
    })

  if (!fontsLoading) {
    return <AppLoading></AppLoading>
  }



  return (
    <App></App>
  )

}

import { AntDesign } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import main from './main/main';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "react-navigation-stack";
//import { Provider } from "react-redux";
import { Foundation } from '@expo/vector-icons';
import second from './main/second';
import good_js from './main/good_js';
import fifth from './main/fifth';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import In_main from './In_Custom/In_main';
const navigator =
  createSwitchNavigator({

    botton: createBottomTabNavigator({
      mainn: createStackNavigator({
        main: main,
        In_main: In_main
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
        second: second,
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
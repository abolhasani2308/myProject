import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { createStackNavigator, createTabNavigator } from "react-navigation";

import { HW4 } from "./Screen";
import { Card } from "./Component/Card";

const RootStack = createStackNavigator(
  {
    _Tab: createTabNavigator(
      {
        _Weather: {
          screen: HW4,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(255,108,0)" : "blue"
                  }}
                  source={require("./Image/01.png")}
                />
              );
            }
          }
        },
        _Football: {
          screen: HW4,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(255,108,0)" : "blue"
                  }}
                  source={require("./Image/02.png")}
                />
              );
            }
          }
        },
        _Currency: {
          screen: HW4,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(255,108,0)" : "blue"
                  }}
                  source={require("./Image/03.png")}
                />
              );
            }
          }
        },
        _Support: {
          screen: HW4,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "rgb(255,108,0)" : "blue"
                  }}
                  source={require("./Image/04.png")}
                />
              );
            }
          }
        }
      },
      {
        tabBarPosition: "bottom",
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          style: {
            backgroundColor: "rgb(0,178,185)",
            height: 50,
            justifyContent: "center"
          },
          indicatorStyle: {
            backgroundColor: "blue",
            height: 0
          }
        },
        initialRouteName: "_Weather",
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false
      }
    )
  },
  {
    initialRouteName: "_Tab",
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;

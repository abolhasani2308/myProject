import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking
} from "react-native";

class Card extends Component {
  render() {
    const page = [1, 2, 3, 4, 5];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "snow",
          alignSelf: "stretch"
        }}
      >
        <ImageBackground
          style={{
            flex: 12,
            alignItems: "center",
            alignSelf: "stretch"
          }}
          resizeMode="stretch"
          source={require("../Image/Background.jpg")}
        >
          {/*Image Card*/}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "colorless"
            }}
          >
            <Image
              style={{
                width: 300,
                height: 300,
                alignItems: "center",
                alignSelf: "stretch",
                borderWidth: 3,
                borderColor: "rgb(255,108,0)",
                marginTop: 30,
                marginHorizontal: 25
              }}
              resizeMode="stretch"
              source={{ uri: this.props.image }}
            />
          </View>
          {/*Singer and Album*/}
          <View
            style={{
              width: 300,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "colorless",
              borderWidth: 3,
              borderColor: "rgb(0,178,185)",
              backgroundColor: "rgb(0,178,185)",
              marginTop: 15
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {"Singer:" + " " + this.props.singer}
            </Text>
          </View>
          <View
            style={{
              width: 300,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "colorless",
              borderWidth: 3,
              borderColor: "rgb(0,178,185)",
              backgroundColor: "rgb(0,178,185)",
              marginTop: 10
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {"Album:" + " " + this.props.album}
            </Text>
          </View>
          {/*Buy button*/}

          <TouchableOpacity
            style={{
              width: 300,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(0,178,185)",
              marginTop: 10
            }}
            onPress={() => {
              Linking.openURL(this.props.url);
            }}
          >
            <Text style={{ fontSize: 20 }}>Buy</Text>
          </TouchableOpacity>
        </ImageBackground>
        {/*Page Number*/}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(255,108,0)",
            alignSelf: "stretch",
            flexDirection: "row-reverse"
          }}
        >
          {page.map(item => {
            return (
              <View
                key={item}
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 1000,
                  marginHorizontal: 5
                }}
              >
                <View
                  style={{
                    width: 17,
                    height: 17,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.props.page,
                    borderRadius: 1000
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export { Card };

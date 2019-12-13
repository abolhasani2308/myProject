import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";

class HW2 extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      isSecure: true,
      username: "",
      newUsrname: "",
      Password: "",
      newPassword: ""
    };

    this.setLoading();
  }

  setLoading() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ActivityIndicator size="large" color="rgb(1,87,95)" />
          <Text
            style={{
              fontSize: 32,
              color: "rgb(1,87,95)",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20
            }}
          >
            Loading
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ width: 200, height: 200, marginBottom: 20 }}>
            <Image
              source={require("../Image/First-Picture.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View
            style={{
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderRadius: 3,
              marginBottom: 30,
              borderColor: "rgb(1,87,95)"
            }}
          >
            <TextInput
              style={{
                fontSize: 20,
                textAlign: "center",
                color: "rgb(1,87,95)"
              }}
              value={this.state.username}
              onChangeText={newUsrname => {
                this.setState({ username: newUsrname });
              }}
              placeholder="Username"
              placeholderTextColor="rgb(1,87,95)"
            />
          </View>
          <View
            style={{
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderRadius: 3,
              borderColor: "rgb(1,87,95)"
            }}
          >
            <TextInput
              style={{
                fontSize: 20,
                textAlign: "center",
                color: "rgb(1,87,95)"
              }}
              value={this.state.Password}
              onChangeText={newPassword => {
                this.setState({ Password: newPassword });
              }}
              placeholder="Password"
              placeholderTextColor="rgb(1,87,95)"
              secureTextEntry={this.state.isSecure}
            />
          </View>
          <View
            style={{
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                width: 50,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
              }}
              onPress={() => {
                this.setState({ isSecure: !this.state.isSecure });
              }}
            >
              <Image
                source={require("../Image/Second-Picture.png")}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export { HW2 };

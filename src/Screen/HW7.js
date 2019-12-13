import React, { Component } from "react";
import { View, Text, Picker } from "react-native";

class HW7 extends Component {
  constructor() {
    super();

    this.state = {
      myState: ""
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",

            borderRadius: 3,
            margin: 40,
            backgroundColor: "rgb(1,87,95)"
          }}
        >
          <Picker
            style={{
              flex: 1,
              alignSelf: "stretch"
            }}
            selectedValue={this.state.myState}
            onValueChange={value => {
              this.setState({ myState: value });
            }}
          >
            <Picker.Item label="1" />
            <Picker.Item label="2" />
            <Picker.Item label="3" />
          </Picker>
        </View>
      </View>
    );
  }
}

export { HW7 };

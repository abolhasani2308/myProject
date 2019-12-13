import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

class HW6 extends Component {
  render() {
    const arr = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"
    ];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FlatList
          style={{ flex: 1, alignSelf: "stretch" }}
          data={arr}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "rgb(1,87,95)",
                  borderWidth: 1,
                  marginBottom: 20
                }}
              >
                <Text style={{ fontSize: 32, color: "white" }}>{item}</Text>
              </View>
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export { HW6 };

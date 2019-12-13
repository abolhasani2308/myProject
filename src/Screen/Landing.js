import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

class Landing extends Component {
  render() {
    const projects = [
      {
        title: "HW1",
        name: "_HW1"
      },
      {
        title: "HW2",
        name: "_HW2"
      },
      {
        title: "HW3",
        name: "_HW3"
      },
      {
        title: "HW4",
        name: "_HW4"
      },
      {
        title: "HW5",
        name: "_HW5"
      },
      {
        title: "HW6",
        name: "_HW6"
      },
      {
        title: "HW7",
        name: "_HW7"
      },
      {
        title: "HW8",
        name: "_HW8"
      },
      {
        title: "Card",
        name: "_Card"
      },
      {
        title: "Album",
        name: "_Album"
      }
    ];
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          backgroundColor: "#008080"
        }}
      >
        <Text style={{ fontSize: 40, color: "#FF6347" }}>--HomeWorks--</Text>
        <FlatList
          style={{ flex: 1, alignSelf: "stretch", marginTop: 20 }}
          data={projects}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "rgb(1,87,95)",
                  borderRadius: 5,
                  marginBottom: 20
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgb(1,87,95)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    alignSelf: "stretch"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignSelf: "stretch",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() => {
                      this.props.navigation.navigate(item.name);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 32,
                        color: "white",
                        marginVertical: 20
                      }}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}
export { Landing };

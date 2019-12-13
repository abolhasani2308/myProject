import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Card } from "../Component/Card";
import Axios from "axios";

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [], isLoading: true };
  }

  componentDidMount() {
    const api = "http://rallycoding.herokuapp.com/api/music_albums";

    Axios.get(api)
      .then(r => {
        this.setState({ data: r.data, isLoading: false });
      })
      .catch(error => {
        alert(error);
      });
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
          <ActivityIndicator size="large" color="rgb(255,108,0)" />
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
          <FlatList
            style={{ flex: 1 }}
            horizontal
            pagingEnabled
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <Card
                  image={item.image}
                  singer={item.artist}
                  album={item.title}
                  url={item.url}
                />
              );
            }}
          />
        </View>
      );
    }
  }
}
export { Album };

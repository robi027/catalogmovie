import React from "react";
import { Text, View, FlatList } from "react-native";
import BaseComponent from "../common/BaseComponent";
import styles from "../config/styles";
import { Routes } from "../navigation/MainNavigation";
import MovieHorizontalItem from "../component/MovieHorizontalItem";

export default class TVScreen extends BaseComponent<Routes.TV> {
  render() {
    return (
      <View>
        <FlatList
          onRefresh={() => {}}
          refreshing={false}
          data={[]}
          renderItem={({ index, item }) => <View />}
          ListFooterComponent={() => this.body()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  body() {
    return (
      <View>
        <View style={{ margin: 20 }}>
          <Text style={styles.t20Bold}>On Air</Text>
        </View>
        <FlatList
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={({ index, item }) => (
            <MovieHorizontalItem key={index} data={item} />
          )}
          keyExtractor={(item, index) => "item_" + index}
          ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ margin: 20 }}>
          <Text style={styles.t20Bold}>Popular</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            horizontal={true}
            data={[0, 1, 2, 3, 4, 5]}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            renderItem={({ index, item }) => (
              <MovieHorizontalItem data={item} />
            )}
            keyExtractor={(item, index) => "item_" + index}
            ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ margin: 20 }} />
      </View>
    );
  }
}

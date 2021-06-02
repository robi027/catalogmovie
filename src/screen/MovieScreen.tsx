import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import BaseComponent from "../common/BaseComponent";
import styles from "../config/styles";
import { Routes } from "../navigation/MainNavigation";

import MovieHorizontalItem from "../component/MovieHorizontalItem";
import MovieVerticalItem from "../component/MovieVerticalItem";

export default class MovieScreen extends BaseComponent<Routes.MOVIE> {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
      >
        <View style={{ flex: 1 }}>
          <View style={{ margin: 20 }}>
            <Text style={styles.t32Bold}>Hello,</Text>
            <Text style={styles.t20Grey}>Looking Your Movie</Text>
          </View>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({ index, item }) => (
              <MovieHorizontalItem key={index} data={item} />
            )}
            keyExtractor={(item, index) => "item_" + index}
            ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
          />

          <View style={{ margin: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.t20Bold}>Popular</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.t12Grey}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 8 }} />
            {[1, 2, 3, 4, 5].map((value, index) => (
              <MovieVerticalItem data={value} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

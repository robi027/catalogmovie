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
import { Prop, Routes } from "../navigation/MainNavigation";

import MovieHorizontalItem from "../components/MovieHorizontalItem";
import MovieVerticalItem from "../components/MovieVerticalItem";
import { connect } from "react-redux";
import { getPopular, getNowPlaying } from "../actions/movie.action";
import LoadingItem from "../components/LoadingItem";
import EmptyItem from "../components/EmptyItem";
import { isEmpty } from "../utils/utils";

type Props = Prop<Routes.MOVIE> & {
  getPopular: () => void;
  getNowPlaying: () => void;
  movie?: any;
};

interface State {
  firstOpened: boolean;
}
class MovieScreen extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      firstOpened: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.getNowPlaying();
    this.props.getPopular();
  }

  render() {
    const { movie } = this.props;
    const { firstOpened } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={
              !firstOpened && (movie.isLoading || movie.isLoadingPopular)
            }
            onRefresh={() => this.getData()}
          />
        }
      >
        <View style={{ flex: 1 }}>
          <View style={{ margin: 20 }}>
            <Text style={styles.t32Bold}>Hello,</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.t20Grey}>Find your favorite movie</Text>
            </TouchableOpacity>
          </View>

          {this.nowPlaying()}
          <View style={{ margin: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.t20Bold}>Popular</Text>
            </View>

            <View style={{ marginVertical: 8 }} />
            {this.popular()}
          </View>
        </View>
      </ScrollView>
    );
  }

  popular() {
    const { movie } = this.props;
    // this.print(movie);
    if (movie.isLoadingPopular && isEmpty(movie.dataPopular?.data?.results)) {
      return <LoadingItem height={175} />;
    }
    if (!movie.isLoadingPopular && isEmpty(movie.dataPopular?.data?.results)) {
      return <EmptyItem height={175} />;
    }
    return movie.dataPopular?.data?.results.map((value: any, index: number) => (
      <MovieVerticalItem data={value} key={index} />
    ));
  }

  nowPlaying() {
    const { movie } = this.props;
    if (movie.isLoading && isEmpty(movie.dataNowPlaying?.data?.results)) {
      return <LoadingItem height={175} />;
    }
    if (!movie.isLoading && isEmpty(movie.dataNowPlaying?.data?.results)) {
      return <EmptyItem height={175} />;
    }
    return (
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={movie.dataNowPlaying?.data?.results || []}
        renderItem={({ index, item }) => (
          <MovieHorizontalItem
            key={index}
            image={item.poster_path}
            rating={item.vote_average}
            title={item.original_title}
          />
        )}
        keyExtractor={(item, index) => "item_" + index}
        ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    movie: state.Movie,
  };
};

export default connect(mapStateToProps, { getPopular, getNowPlaying })(
  MovieScreen
);

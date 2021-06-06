import React from "react";
import { Text, View, FlatList } from "react-native";
import BaseComponent from "../common/BaseComponent";
import styles from "../config/styles";
import { Routes, PropBottomNavigation } from "../navigation/MainNavigation";
import MovieHorizontalItem from "../components/MovieHorizontalItem";
import { connect } from "react-redux";
import { getAiring, getPopular } from "../actions/tv.action";
import { isEmpty } from "../utils/utils";
import LoadingItem from "../components/LoadingItem";
import EmptyItem from "../components/EmptyItem";

type Props = PropBottomNavigation<Routes.TV> & {
  getAiring: () => void;
  getPopular: () => void;
  tv: any;
};

type State = {
  firstOpened: boolean;
};

class TVScreen extends BaseComponent<Props, State> {
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
    this.props.getAiring();
    this.props.getPopular();
  }

  render() {
    const { tv } = this.props;
    const { firstOpened } = this.state;
    return (
      <View>
        <FlatList
          onRefresh={() => this.getData()}
          refreshing={!firstOpened && (tv.isLoading || tv.isLoadingPopular)}
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
          <Text style={styles.t20Bold}>Airing Today</Text>
        </View>
        {this.airingToday()}
        <View style={{ margin: 20 }}>
          <Text style={styles.t20Bold}>Popular</Text>
        </View>
        {this.popular()}
        <View style={{ margin: 20 }} />
      </View>
    );
  }

  popular() {
    const { tv } = this.props;
    // this.print(tv.dataPopular);
    if (tv.isLoadingPopular && isEmpty(tv.dataPopular?.data?.results)) {
      return <LoadingItem height={175} />;
    }
    if (!tv.isLoadingPopular && isEmpty(tv.dataPopular?.data?.results)) {
      return <EmptyItem height={175} />;
    }
    return (
      <FlatList
        horizontal={true}
        data={tv.dataPopular?.data?.results || []}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ index, item }) => (
          <MovieHorizontalItem
            key={index}
            title={item.original_name}
            rating={item.vote_average}
            image={item.poster_path}
            onPress={() =>
              this.props.navigation.navigate(Routes.DETAIL, { data: "tv" })
            }
          />
        )}
        keyExtractor={(item, index) => "item_" + index}
        ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
        showsHorizontalScrollIndicator={false}
      />
    );
  }

  airingToday() {
    const { tv } = this.props;
    // this.print(tv.dataAiring);
    if (tv.isLoading && isEmpty(tv.dataAiring?.data?.results)) {
      return <LoadingItem height={175} />;
    }
    if (!tv.isLoading && isEmpty(tv.dataAiring?.data?.results)) {
      return <EmptyItem height={175} />;
    }
    return (
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        data={tv.dataAiring?.data?.results || []}
        renderItem={({ index, item }) => (
          <MovieHorizontalItem
            key={index}
            title={item.original_name}
            rating={item.vote_average}
            image={item.poster_path}
            onPress={() =>
              this.props.navigation.navigate(Routes.DETAIL, { data: "tv" })
            }
          />
        )}
        keyExtractor={(item, index) => "item_" + index}
        ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    tv: state.TV,
  };
};

export default connect(mapStateToProps, { getAiring, getPopular })(TVScreen);

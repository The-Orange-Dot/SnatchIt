import React from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import { NumberFormatter } from "../components/tools/NumberFormatter";
import { TimerDisplay } from "../components/tools/TimerDisplay";
import { styles } from "../styles/HomeStyle";
import Filter from "../components/Filter";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/base";

const HomeScreen = ({ navigation }: any) => {
  const productsArray = [
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 0,
      expires: "2022-9-6 4:30 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 10,
      expires: "2022-9-8 4:30 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 50,
      expires: "2022-9-10 4:30 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 100,
      expires: "2022-9-20 4:30 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 150,
      expires: "2022-9-5 14:20 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 1305,
      expires: "2022-9-7 4:30 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 1500,
      expires: "2022-9-7 4:30 +0000",
    },
    {
      image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg",
      views: 10000,
      expires: "2022-9-7 4:30 +0000",
    },
  ];

  const products = productsArray.map((product, index) => {
    return (
      <View style={styles.product_card} key={index}>
        <View style={styles.product_card__content}>
          <Image
            style={styles.product_card__image}
            resizeMode="cover"
            source={{ uri: product.image }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={styles.product_card__info}>
            <View style={styles.product_card__info_views_container}>
              <Icon type="material" name="visibility" size={15} color="white" />
              <Text style={styles.product_card__info__text}>
                {NumberFormatter(product.views)}
              </Text>
              <View style={styles.product_card__info__background} />
            </View>
            <View style={styles.product_card__info_views_container}>
              <Text style={styles.product_card__info__text}>
                {TimerDisplay(product.expires)}
              </Text>
              <View style={styles.product_card__info__background} />
            </View>
          </View>
        </View>
      </View>
    );
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Filter navigation={navigation} />
        <View style={styles.products_container}>{products}</View>
      </View>
      <View></View>
    </ScrollView>
  );
};

export default HomeScreen;

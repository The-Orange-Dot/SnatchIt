import React from "react";
import { View, Text } from "react-native";
import { styles } from "./FilterStyles";
import { Input, Icon } from "@rneui/themed";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Filter = ({ navigation }: any) => {
  const [selector, setSelector] = React.useState("popular");

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Input
          placeholder="Search"
          leftIcon={{ type: "material", name: "search" }}
          containerStyle={styles.searchBar__container}
          inputContainerStyle={styles.searchBar__input_container}
        />
        <Icon
          type="material"
          name="filter-list"
          size={30}
          containerStyle={styles.searchBar__icons}
          onPress={() => console.log("Filter Pressed")}
        />
      </View>
      <View style={styles.selectors}>
        <Text
          style={
            selector === "popular"
              ? styles.selectors__text_selected
              : styles.selectors__text
          }
          onPress={() => {
            setSelector("popular");
          }}
        >
          Popular
        </Text>
        <Text
          style={
            selector === "new"
              ? styles.selectors__text_selected
              : styles.selectors__text
          }
          onPress={() => {
            setSelector("new");
          }}
        >
          New
        </Text>
        <Text
          style={
            selector === "checked"
              ? styles.selectors__text_selected
              : styles.selectors__text
          }
          onPress={() => {
            setSelector("checked");
          }}
        >
          Checked
        </Text>
      </View>
    </View>
  );
};

export default Filter;

import React from "react";
import { View, Text } from "react-native";
import { styles } from "./NavBarStyles";
import { Icon } from "@rneui/base";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon type="material" name="home" size={30} />
        <Text>Home</Text>
      </View>

      <View>
        <Icon type="material" name="search" size={30} />
        <Text>Search</Text>
      </View>

      <View>
        <Icon type="material" name="notifications" size={30} />
        <Text>Alerts</Text>
      </View>
    </View>
  );
};

export default NavBar;

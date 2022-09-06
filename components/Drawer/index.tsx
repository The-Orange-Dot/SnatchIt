import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../pages/HomeScreen";
const Drawer = createDrawerNavigator();
import { Button } from "@rneui/base";
import { Text } from "react-native";

const DrawerComponent = () => {
  return (
    <Drawer.Navigator>
      <Text>Test</Text>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;

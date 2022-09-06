import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./pages/HomeScreen";
import NavBar from "./components/NavBar";
import { SafeAreaView, Text, View } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Test</Text>
        </View>
      </SafeAreaView>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
        <NavBar />
      </NavigationContainer>
    </>
  );
}

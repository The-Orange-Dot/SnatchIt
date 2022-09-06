import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 100,
    maxHeight: 100,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  searchBar: {
    minHeight: 70,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar__icons: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar__container: {
    maxWidth: "75%",
  },
  searchBar__input_container: {
    height: 50,
  },
  selectors: {
    flex: 1,
    width: "100%",
    minHeight: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  selectors__text: {
    fontWeight: "bold",
    color: "gray",
  },
  selectors__text_selected: {
    fontWeight: "bold",
    color: "black",
    textDecorationLine: "underline",
  },
});

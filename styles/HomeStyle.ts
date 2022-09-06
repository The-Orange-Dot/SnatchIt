import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
    alignItems: "center",
    minHeight: "100%",
    paddingBottom: 50,
  },
  products_container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  product_card: {
    width: "46%",
    height: 160,
    margin: "2%",
  },
  product_card__content: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  product_card__info: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  product_card__info_views_container: {
    width: "30%",
    height: 20,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  product_card__info_icon: {
    fontSize: 10,
  },
  product_card__info__text: {
    color: "white",
    marginLeft: 5,
    fontWeight: "400",
  },
  product_card__info__background: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
    position: "absolute",
    zIndex: -1,
  },
  product_card__image: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
});

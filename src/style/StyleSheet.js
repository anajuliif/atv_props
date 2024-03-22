import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6fa",
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 30,
    borderRadius: 30,
  },
  name: {
    fontSize: 30,
    color: "#8b008b",
  },
  adress: {
    fontSize: 25,
    color: "#add8e6",
  },
  description: {
    fontSize: 20,
    color: "#a9a9a9",
  },
  card: {
    width: "80%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});

export default styles;

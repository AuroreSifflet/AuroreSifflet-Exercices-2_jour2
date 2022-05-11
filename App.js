import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.image} source={require("./rover.jpg")} />
      </View>
      <View style={styles.view2}>
        <Text>Le rover Opportunity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  view1: {
    flex: 3,
  },
  view2: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 700,
  },
});

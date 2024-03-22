import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/style/StyleSheet";
import TouristLocation from "./src/components/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation
        name="Torre Eiffel"
        adress="Champ de Mars, 5 Av. Anatole France, 75007 Paris, França"
        description="A Torre Eiffel é um monumento localizado na região do Campo de Marte,
         na cidade de Paris, a capital da França. Ela possui 330 metros de altura, divididos em três grandes compartimentos. 
         A base da torre é quadrada, com cerca de 125 metros em cada um dos seus lados."
        imageSource={require("./src/image/torre.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

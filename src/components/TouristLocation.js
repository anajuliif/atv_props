// Importando os componentes View, Text e Image do React Native
import { View, Text, Image } from "react-native";

// Importando os estilos do StyleSheet
import styles from "../style/StyleSheet";

// Definindo o componente TouristLocation
export default function TouristLocation({
  name,
  adress,
  description,
  imageSource,
}) {
  return (
    // Renderizando um contêiner View com estilos definidos no StyleSheet
    <View style={styles.card}>
      {/* Renderizando uma imagem com os estilos definidos no StyleSheet */}
      <Image style={styles.image} source={imageSource} />
      {/* Renderizando o nome da localização turística com os estilos definidos no StyleSheet */}
      <Text style={styles.name}>{name}</Text>
      {/* Renderizando o endereço da localização turística com os estilos definidos no StyleSheet */}
      <Text style={styles.adress}>{adress}</Text>{" "}
      {/* Renderizando a descrição da localização turística com os estilos definidos no StyleSheet */}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

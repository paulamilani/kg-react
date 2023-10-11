import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Header } from "../componentes/Header";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Game: React.FC<{ navigation: any }> = ({ navigation: { navigate} }) => {
  const RandomFlashcard = () => {
    const parentNavigation = navigate
    if (parentNavigation) {
      parentNavigation("FlashCards");
    }
  };

  const JogoMemory = () => {
    const parentNavigation = navigate
    if (parentNavigation) {
      parentNavigation("JogoDaMemoria");
    }
  };
  return (
    <>
      <Header title="Home" view="home" />
      <LottieView
        style={styles.lottie}
        source={require("../../assets/animation_lnhv1sa7.json")}
        autoPlay
        loop
      />
      <View style={styles.container}>
        <Text style={styles.text}>Selecione o Jogo!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Flash Card"
            onPress={RandomFlashcard}
            buttonStyle={styles.button}
          />
          <Button
            title="Jogo da Memória"
            onPress={JogoMemory}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  lottie: {
    marginBottom: 180,
  },
});

export default Game;

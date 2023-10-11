import React, { useState } from "react";
import { Button, Dialog, CheckBox } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Header } from "../componentes/Header";

interface DialogComponentProps {}

const Home: React.FunctionComponent<DialogComponentProps> = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2visible2] = useState(false);
  const [checked, setChecked] = useState(1);

  const comoJogar = () => {
    setVisible1(!visible1);
  };
  const nivelDificuldade = () => {
    setVisible2visible2(!visible2);
  };

  return (
    <>
      <LottieView
        style={styles.lottie}
        source={require("../../assets/animation_lnkhi18p.json")}
        autoPlay
        loop
      />
      <View>
        <Header title="Home" view="home" />
        <View style={styles.buttonContainer}>
          <Button
            title="Como jogar"
            onPress={comoJogar}
            buttonStyle={styles.button}
          />

          <Button
            title="Nivel de dificuldade"
            onPress={nivelDificuldade}
            buttonStyle={styles.button}
          />
        </View>
        <Dialog isVisible={visible1} onBackdropPress={comoJogar}>
          <Dialog.Title title="Instruções" />
          <Text>Aqui vai as regras do jogo!</Text>
        </Dialog>

        <Dialog isVisible={visible2} onBackdropPress={nivelDificuldade}>
          <Dialog.Title title="Selecione a dificuldade" />
          {["Fácil", "Médio", "Difícil"].map((l, i) => (
            <CheckBox
              key={i}
              title={l}
              containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={checked === i + 1}
              onPress={() => {
                setChecked(i + 1);
              }}
            />
          ))}

          <Dialog.Actions>
            <Dialog.Button
              title="SALVAR"
              onPress={() => {
                console.log(`Option ${checked} was selected!`);
                nivelDificuldade();
              }}
            />
            <Dialog.Button title="CANCELAR" onPress={nivelDificuldade} />
          </Dialog.Actions>
        </Dialog>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  buttonContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    marginTop: 70,
  },
});

export default Home;

import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Flashcard from "../../componentes/Flashcard"

const flashcards = [
  { question: "Qual é a capital da França?", answer: "Paris" },
  { question: "Quanto é 2 + 2?", answer: "4" },
  { question: "Qual é a cor do céu?", answer: "Azul" },
  // add flashcards
];

const Flashcards: React.FC = () => {
  const [currentFlashcard, setCurrentFlashcard] = useState(0);

  const showNextFlashcard = () => {
    const nextFlashcard = (currentFlashcard + 1) % flashcards.length;
    setCurrentFlashcard(nextFlashcard);
  };

  return (
    <View style={styles.container}>
      <Flashcard
        question={flashcards[currentFlashcard].question}
        answer={flashcards[currentFlashcard].answer}
      />
      <Button title="Próximo Flashcard" onPress={showNextFlashcard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Flashcards;

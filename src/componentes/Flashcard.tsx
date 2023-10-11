// Flashcard.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={toggleAnswer}>
      <View>
        <Text style={styles.text}>{showAnswer ? answer : question}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    minHeight: 100,
  },
  text: {
    fontSize: 18,
  },
});

export default Flashcard;

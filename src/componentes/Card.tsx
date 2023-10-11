// Card.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CardProps {
  value: string;
  flipped: boolean;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ value, flipped, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: flipped ? "white" : "blue" }]}
      onPress={onPress}
      disabled={flipped}
    >
      {flipped && <Text style={styles.cardText}>{value}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cardText: {
    fontSize: 20,
  },
});

export default Card;

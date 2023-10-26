import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Card from '../../componentes/CardMemoria';
import { Header } from '../../componentes/Header';
import { set } from 'lodash';

const JogoDaMemoria: React.FC = () => {
  const initialCards = [
    { id: 1, value: 'A', flipped: false },
    { id: 2, value: 'A', flipped: false },
    { id: 3, value: 'B', flipped: false },
    { id: 4, value: 'B', flipped: false },
    { id: 5, value: 'C', flipped: false },
    { id: 6, value: 'C', flipped: false },
    { id: 7, value: 'D', flipped: false },
    { id: 8, value: 'D', flipped: false },
    { id: 9, value: 'E', flipped: false },
    { id: 10, value: 'E', flipped: false },
    { id: 11, value: 'F', flipped: false },
    { id: 12, value: 'F', flipped: false },
    { id: 13, value: 'G', flipped: false },
    { id: 14, value: 'G', flipped: false },
    { id: 15, value: 'H', flipped: false },
    { id: 16, value: 'H', flipped: false },
    // add jogo memoria
  ];

  const [cards, setCards] = useState(initialCards);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [card1Id, card2Id] = selectedCards;
      const [card1, card2] = cards.filter(
        (card) => card.id === card1Id || card.id === card2Id,
      );

      if (card1.value === card2.value) {
        setMatches([...matches, card1.id, card2.id]);
        setPontuacao(pontuacao + 1);
      }

      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, flipped: false }
              : card,
          ),
        );
        setSelectedCards([]);
      }, 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (matches.length === cards.length) {
      Alert.alert('Parabéns!', 'Você venceu o jogo!');
    }
  }, [matches, cards]);

  const handleCardPress = (cardId: number) => {
    const card = cards.find((c) => c.id === cardId);

    if (
      !card ||
      selectedCards.length === 2 ||
      card.flipped ||
      matches.includes(cardId)
    ) {
      return;
    }

    setCards((prevCards) =>
      prevCards.map((c) => (c.id === cardId ? { ...c, flipped: true } : c)),
    );

    setSelectedCards((prevSelected) => [...prevSelected, cardId]);
  };

  const shuffleCards = () => {
    setCards([...initialCards.sort(() => Math.random() - 0.5)]);
    setSelectedCards([]);
    setMatches([]);
    setPontuacao(0);
  };

  return (
    <>
      <Header title="Game" view="game" />
      <View style={styles.container}>
        <Text style={styles.title}>Game Card</Text>
        <View style={styles.cardsContainer}>
          {cards.map((card) => (
            <Card
              key={card.id}
              value={card.value}
              flipped={card.flipped}
              onPress={() => handleCardPress(card.id)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.shuffleButton} onPress={shuffleCards}>
          <Text style={styles.shuffleButtonText}>Embaralhar Cartas</Text>
        </TouchableOpacity>
        <Text>Pontuação: {pontuacao}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  shuffleButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  shuffleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default JogoDaMemoria;

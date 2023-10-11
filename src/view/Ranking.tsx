// Ranking.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Header } from "../componentes/Header";

interface User {
  id: number;
  name: string;
  score: number;
}

const Ranking: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "Usuário 1", score: 100 },
    { id: 2, name: "Usuário 2", score: 85 },
    { id: 3, name: "Usuário 3", score: 92 },
    { id: 4, name: "Usuário 4", score: 78 },
    { id: 5, name: "Usuário 5", score: 110 },
    // Adicione mais usuários conforme necessário
  ];

  const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userScore}>Pontuação: {item.score}</Text>
    </View>
  );

  return (
    <>
      <Header title="Home" view="home" />
      <View style={styles.container}>
        <Text style={styles.text}>Classificação dos Jogos!</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUserItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
  },
  userScore: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
});

export default Ranking;

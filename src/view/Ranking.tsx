import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../componentes/Header';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Ranking: React.FC = () => {
  const [dados, setDados] = useState<any[]>([]);

  const recuperarDadosDoFirestore = async () => {
    const db = getFirestore();
    const dadosRef = collection(db, 'person');

    try {
      const querySnapshot = await getDocs(dadosRef);
      const dados = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dados;
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
      return [];
    }
  };

  useEffect(() => {
    async function carregarDados() {
      const dadosDoFirestore = await recuperarDadosDoFirestore();
      setDados(dadosDoFirestore);
    }

    carregarDados();
  }, []);

  return (
    <>
      <Header title="Ranking" view="ranking" />
      <View style={styles.container}>
        <Text style={styles.title}>Classificação!</Text>
        {dados.map((item) => (
          <Text style={styles.text} key={item.id}>
            Nome: {item.nome} - Pontuação: {item.ponto}
          </Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Ranking;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../componentes/Header';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const avatars = [
  require('../../assets/images/user-hp.png'),
  require('../../assets/images/user-cool.png'),
  require('../../assets/images/user-student.png'),
];

const AvatarSelection: React.FC = () => {
  const [avatarIndex, setAvatarIndex] = useState<number | null>(null);
  const [nome, setNome] = useState('');

  useEffect(() => {
    loadAvatar();
  }, []);

  const selectAvatar = (index: number) => {
    setAvatarIndex(index);
    saveAvatar(index);
  };

  const saveAvatar = async (index: number) => {
    try {
      await AsyncStorage.setItem('selectedAvatar', index.toString());
    } catch (error) {
      console.error('Erro ao salvar o avatar:', error);
    }
  };

  const loadAvatar = async () => {
    try {
      const index = await AsyncStorage.getItem('selectedAvatar');
      if (index !== null) {
        setAvatarIndex(parseInt(index));
      }
    } catch (error) {
      console.error('Erro ao carregar o avatar:', error);
    }
  };

  const salvarNome = async (nome: String) => {
    //try {
    await addDoc(collection(db, 'person'), nome);
    //return 'ok';
    //} catch (error) {
    //console.log('Erro ao salvar nome');
    //return 'error';
    //}
  };

  return (
    <>
      <Header title="Avatar" view="Avatar" />

      <View style={styles.container}>
        <Text style={styles.text}>Selecione seu avatar!</Text>
        {avatarIndex !== null && (
          <Image source={avatars[avatarIndex]} style={styles.avatar} />
        )}

        <View style={styles.avatarList}>
          {avatars.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => selectAvatar(index)}
              style={[
                styles.avatarItem,
                avatarIndex === index ? styles.selectedAvatar : null,
              ]}>
              <Image source={avatar} style={styles.avatarThumbnail} />
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={styles.name}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Button title="Salvar" onPress={() => salvarNome(nome)} />
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  avatarList: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarItem: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 50,
  },
  selectedAvatar: {
    borderColor: 'blue',
  },
  avatarThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  name: {
    marginBottom: 20,
    borderColor: 'blue',
    fontSize: 20,
  },
});

export default AvatarSelection;

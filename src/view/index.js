import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Image } from 'react-native';

import logo from '../../assets/logo.png';

export default function Home() {

    return <SafeAreaView style={styles.container}>

    <Image source={logo} />
      
    <View>
      <Button
        title="Start"
        onPress={() => navigation.navigate('InicioJogo')}
      />
    </View>

    <p></p>

    <View>
      
      <Button
        title="Resume"
        onPress={() => navigation.navigate('Resume')}
      />
    </View>

    <p></p>

    <View>
      
      <Button
        title="Avatar"
        onPress={() => navigation.navigate('Avatar')}
      />
    </View>

  </SafeAreaView>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

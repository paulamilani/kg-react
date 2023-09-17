import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Image } from 'react-native';

export default function Home() {
    return <SafeAreaView style={styles.container}>
     
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
    alignItems: 'center',
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

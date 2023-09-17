import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Avatar() {
    return <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </View>  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    image: {
      width: 50,
      height: 50,
    },
  });

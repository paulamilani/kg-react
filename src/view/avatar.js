import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Avatar() {
    return <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </View>  
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
